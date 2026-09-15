// src/config.ts
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { OpenAPI } from './generated/core/OpenAPI';
import { toQrPointError } from './errors';
import type { QrPointError } from './errors';

/** Default base URL. HTTPS on purpose: an HTTP base is blocked as mixed content in browsers. */
export const DEFAULT_BASE_URL = 'https://api.qrpoint.com.tr:6201';

type RetriableConfig = AxiosRequestConfig & { _qrpointRetried?: boolean };

/** Installed interceptor id, so reconfiguring never stacks duplicates. */
let interceptorId: number | null = null;
/** In-flight refresh, shared by every request that got a 401 at the same time. */
let refreshInFlight: Promise<string | undefined> | null = null;
/** Last successful refresh, reused by 401s that land just after it settled. */
let lastRefresh: { token: string; at: number } | null = null;
/** How long a fresh token is reused instead of triggering another refresh. */
const REFRESH_REUSE_WINDOW_MS = 2000;

export interface QrPointClientConfig {
  /**
   * Base URL of your API.
   * Default: https://api.qrpoint.com.tr:6201
   */
  baseURL?: string;

  /**
   * Function that returns auth token (string or Promise<string>).
   * E.g. from Zustand, Redux, SecureStore etc.
   */
  getToken?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns client ID (string or Promise<string>).
   * This will be automatically included in all requests as x-client-id header.
   *
   * For Expo apps: Use getExpoDeviceId() helper
   * For Next.js apps: Use getWebDeviceId() helper
   */
  getClientId?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns tenant ID (string or Promise<string>).
   * This will be automatically included in all requests as x-tenant-id header.
   *
   * Useful for multi-tenant applications where each user belongs to a tenant/organization.
   *
   * @example
   * ```typescript
   * configureQrPointClient({
   *   getTenantId: () => localStorage.getItem('tenant_id') || undefined,
   * });
   * ```
   */
  getTenantId?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns the Accept-Language header value (string or Promise<string>).
   * This will be automatically included in all requests as Accept-Language header.
   *
   * Useful for internationalization to get localized responses from the API.
   *
   * @example
   * ```typescript
   * // Static language
   * configureQrPointClient({
   *   getLanguage: () => 'tr',
   * });
   *
   * // Dynamic language from i18n library
   * configureQrPointClient({
   *   getLanguage: () => i18n.language,
   * });
   * ```
   */
  getLanguage?: () => string | undefined | Promise<string | undefined>;

  /**
   * Whether to send cookies (if you ever need that in web).
   */
  withCredentials?: boolean;

  /**
   * Called when a request comes back 401.
   *
   * Return a fresh token to have the original request retried once with it.
   * Return `undefined` (or throw) to let the 401 surface to the caller.
   *
   * Concurrent 401s share a single call: if ten requests fail at once, this
   * runs once and all ten retry with the same new token.
   *
   * @example
   * ```typescript
   * configureQrPointClient({
   *   getToken: () => authStore.getState().accessToken,
   *   onUnauthorized: async () => {
   *     const token = await authStore.getState().refresh();
   *     if (!token) { authStore.getState().logout(); return undefined; }
   *     return token;
   *   },
   * });
   * ```
   */
  onUnauthorized?: () => Promise<string | undefined> | string | undefined;

  /**
   * Called for every failed request, after any refresh attempt has been made.
   * Useful for centralized logging or toasts. Never affects the thrown error.
   */
  onError?: (error: QrPointError) => void;
}

/**
 * Call this once in your app (e.g. app bootstrap)
 * before using any Service methods.
 */
export const configureQrPointClient = (config: QrPointClientConfig = {}) => {
  OpenAPI.BASE = config.baseURL ?? DEFAULT_BASE_URL;
  OpenAPI.TOKEN = async () => {
    const token = await config.getToken?.();
    return token ?? '';
  };
  OpenAPI.WITH_CREDENTIALS = config.withCredentials ?? false;

  // Set client ID, tenant ID, and Accept-Language in global headers
  if (config.getClientId || config.getTenantId || config.getLanguage) {
    OpenAPI.HEADERS = async () => {
      const [clientId, tenantId, language] = await Promise.all([
        config.getClientId?.(),
        config.getTenantId?.(),
        config.getLanguage?.(),
      ]);

      const headers: Record<string, string> = {};

      if (clientId) {
        headers['x-client-id'] = clientId;
      }

      if (tenantId) {
        headers['x-tenant-id'] = tenantId;
      }

      if (language) {
        headers['accept-language'] = language;
      }

      return headers;
    };
  }

  installInterceptor(config);
};

/**
 * Installs (or replaces) the response interceptor that powers `onUnauthorized`
 * and `onError`. Scoped to requests aimed at `OpenAPI.BASE`, so an app that also
 * uses axios for its own calls is left alone.
 */
const installInterceptor = (config: QrPointClientConfig) => {
  if (interceptorId !== null) {
    axios.interceptors.response.eject(interceptorId);
    interceptorId = null;
  }
  refreshInFlight = null;
  lastRefresh = null;

  if (!config.onUnauthorized && !config.onError) return;

  interceptorId = axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const requestConfig = error.config as RetriableConfig | undefined;
      const isOwnRequest =
        typeof requestConfig?.url === 'string' && requestConfig.url.startsWith(OpenAPI.BASE);

      if (!isOwnRequest) return Promise.reject(error);

      const canRetry =
        error.response?.status === 401 && !requestConfig?._qrpointRetried && !!config.onUnauthorized;

      if (canRetry && requestConfig) {
        const token = await resolveFreshToken(config);

        if (token) {
          requestConfig._qrpointRetried = true;
          requestConfig.headers = {
            ...(requestConfig.headers as Record<string, string> | undefined),
            Authorization: `Bearer ${token}`,
          } as AxiosRequestConfig['headers'];
          return axios.request(requestConfig);
        }
      }

      config.onError?.(toQrPointError(error.response ? toApiErrorLike(error) : error));
      return Promise.reject(error);
    }
  );
};

/**
 * Returns a token to retry with, calling `onUnauthorized` at most once per burst
 * of 401s: concurrent failures await the same promise, and failures that land
 * just after a refresh settled reuse its result.
 */
const resolveFreshToken = async (config: QrPointClientConfig): Promise<string | undefined> => {
  if (lastRefresh && Date.now() - lastRefresh.at < REFRESH_REUSE_WINDOW_MS) {
    return lastRefresh.token;
  }

  refreshInFlight ??= Promise.resolve()
    .then(() => config.onUnauthorized!())
    .catch(() => undefined)
    .then((token) => {
      if (token) lastRefresh = { token, at: Date.now() };
      return token;
    })
    .finally(() => {
      refreshInFlight = null;
    });

  return refreshInFlight;
};

/** Shapes an AxiosError with a response into something `toQrPointError` reads as an API error. */
const toApiErrorLike = (error: AxiosError) => ({
  name: 'ApiError',
  message: error.message,
  status: error.response!.status,
  statusText: error.response!.statusText,
  body: error.response!.data,
  url: error.config?.url ?? '',
});
