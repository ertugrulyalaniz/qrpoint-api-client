// src/errors.ts
import { ApiError } from './generated/core/ApiError';

/**
 * Normalized error shape. Every failure coming out of a service call can be
 * turned into this with {@link toQrPointError}, regardless of whether the
 * backend answered with an `ApiResponseOf*` envelope, a `ProblemDetails`
 * payload, a plain string, or nothing at all (network failure).
 */
export interface QrPointError {
  /** HTTP status code, or 0 when the request never reached the server. */
  status: number;
  /** Best available human-readable message. */
  message: string;
  /** True when the request failed before a response was received. */
  isNetworkError: boolean;
  /** Field-level validation errors, when the backend sent any. */
  validationErrors?: Record<string, string[]>;
  /** The raw response body, untouched. */
  body?: unknown;
  /** The original thrown value. */
  cause: unknown;
}

/** Type guard for the generated `ApiError`. */
export const isApiError = (error: unknown): error is ApiError =>
  error instanceof ApiError ||
  (typeof error === 'object' &&
    error !== null &&
    (error as { name?: unknown }).name === 'ApiError' &&
    typeof (error as { status?: unknown }).status === 'number');

/** True when the failure was a 401 — useful for redirecting to login. */
export const isUnauthorizedError = (error: unknown): boolean =>
  isApiError(error) && error.status === 401;

/** True when the failure was a 403. */
export const isForbiddenError = (error: unknown): boolean =>
  isApiError(error) && error.status === 403;

/** True when the failure was a 404. */
export const isNotFoundError = (error: unknown): boolean =>
  isApiError(error) && error.status === 404;

const extractValidationErrors = (body: unknown): Record<string, string[]> | undefined => {
  if (typeof body !== 'object' || body === null) return undefined;
  const errors = (body as { errors?: unknown }).errors;
  if (typeof errors !== 'object' || errors === null) return undefined;

  const normalized: Record<string, string[]> = {};
  for (const [field, value] of Object.entries(errors as Record<string, unknown>)) {
    if (Array.isArray(value)) {
      normalized[field] = value.map(String);
    } else if (typeof value === 'string') {
      normalized[field] = [value];
    }
  }
  return Object.keys(normalized).length > 0 ? normalized : undefined;
};

const extractMessage = (body: unknown, fallback: string): string => {
  if (typeof body === 'string' && body.trim()) return body;
  if (typeof body === 'object' && body !== null) {
    const record = body as Record<string, unknown>;
    // ApiResponseOf* envelope, then ProblemDetails, then common variants.
    for (const key of ['message', 'detail', 'title', 'error', 'Message']) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) return value;
    }
  }
  return fallback;
};

/**
 * Turns anything thrown by a service call into a {@link QrPointError}.
 *
 * @example
 * ```typescript
 * try {
 *   await DataAssetsService.postApiDataAssetsGetall({ requestBody: {} });
 * } catch (e) {
 *   const error = toQrPointError(e);
 *   if (error.status === 401) redirectToLogin();
 *   else toast(error.message);
 * }
 * ```
 */
export const toQrPointError = (error: unknown): QrPointError => {
  if (isApiError(error)) {
    return {
      status: error.status,
      message: extractMessage(error.body, error.message || error.statusText || 'Request failed'),
      isNetworkError: false,
      validationErrors: extractValidationErrors(error.body),
      body: error.body,
      cause: error,
    };
  }

  if (error instanceof Error) {
    return {
      status: 0,
      message: error.message || 'Network error',
      isNetworkError: true,
      cause: error,
    };
  }

  return {
    status: 0,
    message: typeof error === 'string' && error.trim() ? error : 'Unknown error',
    isNetworkError: true,
    cause: error,
  };
};
