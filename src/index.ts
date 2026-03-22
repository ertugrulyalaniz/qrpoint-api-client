// src/index.ts

// Config helper
export { configureQrPointClient } from './config';
export type { QrPointClientConfig } from './config';

// Device ID utilities
export {
  getExpoDeviceId,
  getWebDeviceId,
  getWebDeviceIdWithFingerprint,
  createCustomDeviceId,
} from './device-id';

// Re-export generated stuff
export * from './generated';