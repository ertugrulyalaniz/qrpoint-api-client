/**
 * Device ID utilities for both Expo and Web/Next.js apps
 */
/**
 * Get a unique device ID for Expo apps.
 * Uses expo-application to get a unique installation ID.
 *
 * @requires expo-application
 * @returns Device ID or undefined if not in Expo environment
 *
 * @example
 * ```typescript
 * import { getExpoDeviceId } from '@yourorg/qrpoint-api-client';
 *
 * configureQrPointClient({
 *   getDeviceId: getExpoDeviceId,
 * });
 * ```
 */
export declare const getExpoDeviceId: () => Promise<string | undefined>;
/**
 * Get a unique device ID for web/Next.js apps.
 * Generates and stores a UUID in localStorage.
 *
 * @returns Device ID
 *
 * @example
 * ```typescript
 * import { getWebDeviceId } from '@yourorg/qrpoint-api-client';
 *
 * configureQrPointClient({
 *   getDeviceId: getWebDeviceId,
 * });
 * ```
 */
export declare const getWebDeviceId: () => string;
/**
 * Enhanced web device ID that includes browser fingerprinting.
 * This is more persistent across localStorage clears but less privacy-friendly.
 *
 * @returns Device ID based on browser fingerprint
 *
 * @example
 * ```typescript
 * import { getWebDeviceIdWithFingerprint } from '@yourorg/qrpoint-api-client';
 *
 * configureQrPointClient({
 *   getDeviceId: getWebDeviceIdWithFingerprint,
 * });
 * ```
 */
export declare const getWebDeviceIdWithFingerprint: () => string;
/**
 * Create a custom device ID getter function.
 * Useful if you have your own device ID management system.
 *
 * @example
 * ```typescript
 * import { createCustomDeviceId } from '@yourorg/qrpoint-api-client';
 *
 * const getMyDeviceId = createCustomDeviceId(() => {
 *   return myCustomDeviceIdLogic();
 * });
 *
 * configureQrPointClient({
 *   getDeviceId: getMyDeviceId,
 * });
 * ```
 */
export declare const createCustomDeviceId: (getter: () => string | Promise<string>) => (() => Promise<string>);
