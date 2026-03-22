// examples/nextjs-example.ts
// Example usage for Next.js apps

import {
  configureQrPointClient,
  getWebDeviceId,
  AuthService,
  PlacesService,
} from '@qrpoint/api-client';

// Configure the client once at app startup (e.g., in _app.tsx or layout.tsx)
configureQrPointClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.qrpoint.com.tr:6202',
  getDeviceId: getWebDeviceId,
  getTenantId: () => {
    // Get tenant ID (if using multi-tenancy)
    // Option 1: From localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tenant_id') || undefined;
    }
    // Option 2: From subdomain
    // const subdomain = window.location.hostname.split('.')[0];
    // return subdomain !== 'www' ? subdomain : undefined;
    return undefined;
  },
  getToken: () => {
    // Get token from localStorage or cookies
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token') || undefined;
    }
    return undefined;
  },
});

// Example: Login flow
export async function loginExample(email: string, password: string) {
  try {
    const response = await AuthService.postApiAuthLogin({
      email,
      password,
    });

    // Save the token
    if (response.token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', response.token);
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
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
}

// Example: React Hook for fetching data
export function usePlaces() {
  const [places, setPlaces] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    fetchPlacesExample()
      .then(setPlaces)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { places, loading, error };
}
