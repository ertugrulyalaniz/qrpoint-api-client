// examples/expo-example.ts
// Example usage for Expo apps

import {
  configureQrPointClient,
  getExpoDeviceId,
  AuthService,
  PlacesService,
} from '@qrpoint/api-client';
import * as SecureStore from 'expo-secure-store';

// Configure the client once at app startup (e.g., in App.tsx)
configureQrPointClient({
  baseURL: 'https://api.qrpoint.com.tr:6202',
  getDeviceId: getExpoDeviceId,
  getTenantId: async () => {
    // Get tenant ID from secure storage (if using multi-tenancy)
    const tenantId = await SecureStore.getItemAsync('tenant_id');
    return tenantId || undefined;
  },
  getToken: async () => {
    // Get token from secure storage
    const token = await SecureStore.getItemAsync('auth_token');
    return token || undefined;
  },
});

// Example: Login flow
export async function loginExample() {
  try {
    const response = await AuthService.postApiAuthLogin({
      email: 'user@example.com',
      password: 'password123',
    });

    // Save the token
    if (response.token) {
      await SecureStore.setItemAsync('auth_token', response.token);
    }

    console.log('Login successful:', response);
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

// Example: Fetch places (device ID is automatically included)
export async function fetchPlacesExample() {
  try {
    const places = await PlacesService.getApiPlaces();
    console.log('Places:', places);
    return places;
  } catch (error) {
    console.error('Failed to fetch places:', error);
    throw error;
  }
}

// Example: Logout
export async function logoutExample() {
  try {
    await AuthService.postApiAuthLogout();
    await SecureStore.deleteItemAsync('auth_token');
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
}
