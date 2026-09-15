// src/index.ts

// Config helper
export { configureQrPointClient, DEFAULT_BASE_URL } from './config';
export type { QrPointClientConfig } from './config';

// Error helpers
export {
  isApiError,
  isUnauthorizedError,
  isForbiddenError,
  isNotFoundError,
  toQrPointError,
} from './errors';
export type { QrPointError } from './errors';

// Device ID utilities
export {
  getExpoDeviceId,
  getWebDeviceId,
  getWebDeviceIdWithFingerprint,
  createCustomDeviceId,
} from './device-id';

// Re-export generated stuff
export * from './generated';