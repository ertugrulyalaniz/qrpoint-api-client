// src/device-id.ts

/**
 * Device ID utilities for both Expo and Web/Next.js apps
 */

// ============================================================================
// Expo Device ID Helper
// ============================================================================

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
export const getExpoDeviceId = async (): Promise<string | undefined> => {
  try {
    // Dynamic import to avoid requiring expo-application in web builds
    // @ts-expect-error - Optional peer dependency, may not be installed
    const Application = await import('expo-application');

    // androidId is unique per app installation on Android
    // On iOS, we use the installation ID
    if (Application.androidId) {
      return Application.androidId;
    }

    // For iOS or if androidId is not available, use getIosIdForVendorAsync
    if (Application.getIosIdForVendorAsync) {
      const iosId = await Application.getIosIdForVendorAsync();
      if (iosId) return iosId;
    }

    // Fallback: generate and store a UUID
    return await getStoredDeviceId();
  } catch (error) {
    console.warn('expo-application not available, falling back to stored UUID');
    return await getStoredDeviceId();
  }
};

/**
 * Store and retrieve a device ID using expo-secure-store or AsyncStorage
 */
const getStoredDeviceId = async (): Promise<string> => {
  const DEVICE_ID_KEY = '@qrpoint_device_id';

  try {
    // Try expo-secure-store first (more secure)
    try {
      // @ts-expect-error - Optional peer dependency, may not be installed
      const SecureStore = await import('expo-secure-store');
      let deviceId = await SecureStore.getItemAsync(DEVICE_ID_KEY);

      if (!deviceId) {
        deviceId = generateUUID();
        await SecureStore.setItemAsync(DEVICE_ID_KEY, deviceId);
      }

      return deviceId;
    } catch {
      // Fallback to AsyncStorage
      // @ts-expect-error - Optional peer dependency, may not be installed
      const AsyncStorage = await import('@react-native-async-storage/async-storage');
      let deviceId = await AsyncStorage.default.getItem(DEVICE_ID_KEY);

      if (!deviceId) {
        deviceId = generateUUID();
        await AsyncStorage.default.setItem(DEVICE_ID_KEY, deviceId);
      }

      return deviceId;
    }
  } catch (error) {
    // If all storage methods fail, generate a session-only UUID
    console.warn('Storage not available, using session-only device ID');
    return generateUUID();
  }
};

// ============================================================================
// Web/Next.js Device ID Helper
// ============================================================================

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
export const getWebDeviceId = (): string => {
  const DEVICE_ID_KEY = 'qrpoint_device_id';

  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    // Server-side or no localStorage: return a temporary ID
    // In Next.js SSR, this will be replaced client-side
    return generateUUID();
  }

  try {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);

    if (!deviceId) {
      deviceId = generateUUID();
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }

    return deviceId;
  } catch (error) {
    // localStorage might be disabled or unavailable
    console.warn('localStorage not available, using session-only device ID');
    return generateUUID();
  }
};

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
export const getWebDeviceIdWithFingerprint = (): string => {
  const DEVICE_ID_KEY = 'qrpoint_device_id';
  const FINGERPRINT_KEY = 'qrpoint_fingerprint';

  if (typeof window === 'undefined') {
    return generateUUID();
  }

  try {
    // Try to get stored device ID
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    const storedFingerprint = localStorage.getItem(FINGERPRINT_KEY);

    // Generate current fingerprint
    const currentFingerprint = getBrowserFingerprint();

    // If fingerprint changed or no device ID, generate new one
    if (!deviceId || storedFingerprint !== currentFingerprint) {
      deviceId = generateUUID();
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
      localStorage.setItem(FINGERPRINT_KEY, currentFingerprint);
    }

    return deviceId;
  } catch (error) {
    return generateUUID();
  }
};

/**
 * Simple browser fingerprinting based on available browser properties.
 * Note: This is not cryptographically secure, just for device identification.
 */
const getBrowserFingerprint = (): string => {
  if (typeof window === 'undefined') return '';

  const nav = window.navigator;
  const screen = window.screen;

  const fingerprint = [
    nav.userAgent,
    nav.language,
    screen.colorDepth,
    screen.width,
    screen.height,
    new Date().getTimezoneOffset(),
    !!window.sessionStorage,
    !!window.localStorage,
  ].join('|');

  // Simple hash function
  return simpleHash(fingerprint);
};

/**
 * Simple hash function for fingerprinting
 */
const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
};

// ============================================================================
// UUID Generator
// ============================================================================

/**
 * Generate a RFC4122 version 4 compliant UUID
 */
const generateUUID = (): string => {
  // Check if crypto.randomUUID is available (modern browsers & Node 19+)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback to manual UUID generation
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// ============================================================================
// Custom Device ID
// ============================================================================

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
export const createCustomDeviceId = (
  getter: () => string | Promise<string>
): (() => Promise<string>) => {
  return async () => {
    const id = await getter();
    return id;
  };
};
