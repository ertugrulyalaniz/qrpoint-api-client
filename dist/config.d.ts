export interface QrPointClientConfig {
    /**
     * Base URL of your API.
     * Default: http://api.qrpoint.com.tr:6202
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
}
/**
 * Call this once in your app (e.g. app bootstrap)
 * before using any Service methods.
 */
export declare const configureQrPointClient: (config?: QrPointClientConfig) => void;
