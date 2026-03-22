# @qrpoint/api-client

Typed API client for QRPoint OpenAPI, optimized for both **Expo mobile apps** and **Next.js web apps**.

## Features

- ✅ **Fully typed** - Auto-generated from OpenAPI spec
- ✅ **Automatic client ID** - Automatically includes `x-client-id` in every request
- ✅ **Internationalization** - Automatically includes `Accept-Language` header for localized responses
- ✅ **Cross-platform** - Works seamlessly in Expo and Next.js
- ✅ **Token management** - Built-in auth token handling
- ✅ **Axios-based** - Familiar and reliable HTTP client

---

## Installation

```bash
npm install @qrpoint/api-client
```

### For Expo Apps

Install the required Expo dependencies:

```bash
npx expo install expo-application expo-secure-store @react-native-async-storage/async-storage
```

### For Next.js Apps

No additional dependencies required! The package works out of the box.

---

## Quick Start

### Expo (React Native)

```typescript
import {
  configureQrPointClient,
  getExpoDeviceId,
  AuthService
} from '@qrpoint/api-client';

// Configure once at app startup (e.g., in App.tsx)
configureQrPointClient({
  baseURL: 'https://api.qrpoint.com.tr:6202',
  getClientId: getExpoDeviceId,
  getToken: async () => {
    // Return your auth token from storage
    // e.g., from SecureStore, AsyncStorage, Zustand, Redux, etc.
    const token = await SecureStore.getItemAsync('auth_token');
    return token;
  },
});

// Use any service - device ID is automatically included
async function login() {
  const response = await AuthService.postApiAuthLogin({
    email: 'user@example.com',
    password: 'password123',
  });

  console.log('Logged in:', response);
}
```

### Next.js

```typescript
import {
  configureQrPointClient,
  getWebDeviceId,
  AuthService
} from '@qrpoint/api-client';

// Configure once at app startup (e.g., in _app.tsx or layout.tsx)
configureQrPointClient({
  baseURL: 'https://api.qrpoint.com.tr:6202',
  getClientId: getWebDeviceId,
  getToken: () => {
    // Return your auth token from cookies, localStorage, etc.
    return localStorage.getItem('auth_token') || undefined;
  },
});

// Use any service - device ID is automatically included
async function login() {
  const response = await AuthService.postApiAuthLogin({
    email: 'user@example.com',
    password: 'password123',
  });

  console.log('Logged in:', response);
}
```

---

## Configuration

### `configureQrPointClient(config)`

Configure the API client with your settings.

```typescript
interface QrPointClientConfig {
  /**
   * Base URL of your API.
   * Default: http://api.qrpoint.com.tr:6202
   */
  baseURL?: string;

  /**
   * Function that returns the auth token.
   */
  getToken?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns the client ID.
   * This will be automatically included in all requests as x-client-id header.
   */
  getClientId?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns the tenant ID.
   * This will be automatically included in all requests as x-tenant-id header.
   * Useful for multi-tenant applications.
   */
  getTenantId?: () => string | undefined | Promise<string | undefined>;

  /**
   * Function that returns the Accept-Language header value.
   * This will be automatically included in all requests.
   * Useful for internationalization.
   */
  getLanguage?: () => string | undefined | Promise<string | undefined>;

  /**
   * Whether to send cookies (mainly for web).
   */
  withCredentials?: boolean;
}
```

---

## Device ID Utilities

### Expo Apps

#### `getExpoDeviceId()`

Automatically generates and retrieves a unique device ID for Expo apps.

**How it works:**
1. On Android: Uses `expo-application.androidId`
2. On iOS: Uses `expo-application.getIosIdForVendorAsync()`
3. Fallback: Generates and stores a UUID in `expo-secure-store` or `AsyncStorage`

```typescript
import { configureQrPointClient, getExpoDeviceId } from '@qrpoint/api-client';

configureQrPointClient({
  getClientId: getExpoDeviceId,
});
```

### Next.js / Web Apps

#### `getWebDeviceId()`

Generates and stores a device ID in `localStorage`.

```typescript
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';

configureQrPointClient({
  getClientId: getWebDeviceId,
});
```

#### `getWebDeviceIdWithFingerprint()`

Enhanced device ID that includes browser fingerprinting for more persistence.

**Note:** This is less privacy-friendly but more persistent across localStorage clears.

```typescript
import { configureQrPointClient, getWebDeviceIdWithFingerprint } from '@qrpoint/api-client';

configureQrPointClient({
  getDeviceId: getWebDeviceIdWithFingerprint,
});
```

### Custom Device ID

#### `createCustomDeviceId()`

Create your own device ID getter if you have custom logic.

```typescript
import { configureQrPointClient, createCustomDeviceId } from '@qrpoint/api-client';

const getMyDeviceId = createCustomDeviceId(() => {
  // Your custom device ID logic
  return myCustomDeviceIdFunction();
});

configureQrPointClient({
  getDeviceId: getMyDeviceId,
});
```

---

## Tenant ID (Multi-Tenancy Support)

If your application uses multi-tenancy (where users belong to different organizations/tenants), you can automatically include the tenant ID in all requests:

### Configuration

```typescript
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';

configureQrPointClient({
  getClientId: getWebDeviceId,
  getTenantId: () => {
    // Return the current user's tenant ID
    // This could come from:
    // - User profile after login
    // - URL subdomain (e.g., tenant1.yourapp.com)
    // - localStorage/SecureStore
    // - State management (Zustand, Redux, etc.)
    return localStorage.getItem('tenant_id') || undefined;
  },
});
```

### Expo Example with Tenant ID

```typescript
import { configureQrPointClient, getExpoDeviceId } from '@qrpoint/api-client';
import * as SecureStore from 'expo-secure-store';

configureQrPointClient({
  getClientId: getExpoDeviceId,
  getTenantId: async () => {
    const tenantId = await SecureStore.getItemAsync('tenant_id');
    return tenantId || undefined;
  },
  getToken: async () => {
    const token = await SecureStore.getItemAsync('auth_token');
    return token || undefined;
  },
});
```

### Dynamic Tenant ID (from state management)

```typescript
import create from 'zustand';
import { configureQrPointClient } from '@qrpoint/api-client';

interface AppStore {
  tenantId: string | null;
  setTenantId: (id: string) => void;
}

const useAppStore = create<AppStore>((set) => ({
  tenantId: null,
  setTenantId: (tenantId) => set({ tenantId }),
}));

configureQrPointClient({
  getTenantId: () => useAppStore.getState().tenantId || undefined,
});

// Later, after login:
const loginResponse = await AuthService.postApiAuthLogin({ ... });
if (loginResponse.tenantId) {
  useAppStore.getState().setTenantId(loginResponse.tenantId);
}
```

### From URL Subdomain (Next.js)

```typescript
configureQrPointClient({
  getTenantId: () => {
    if (typeof window !== 'undefined') {
      // Extract tenant from subdomain: tenant1.yourapp.com -> tenant1
      const hostname = window.location.hostname;
      const subdomain = hostname.split('.')[0];
      return subdomain !== 'www' ? subdomain : undefined;
    }
    return undefined;
  },
});
```

---

## Language / Internationalization (i18n)

The API client supports automatic `Accept-Language` header injection for internationalized responses.

### Static Language

```typescript
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';

configureQrPointClient({
  getClientId: getWebDeviceId,
  getLanguage: () => 'tr', // Turkish
});
```

### With i18next (Next.js)

```typescript
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';
import i18n from './i18n';

configureQrPointClient({
  getClientId: getWebDeviceId,
  getLanguage: () => i18n.language,
});
```

### With Expo Localization

```typescript
import { configureQrPointClient, getExpoDeviceId } from '@qrpoint/api-client';
import { getLocales } from 'expo-localization';

configureQrPointClient({
  getClientId: getExpoDeviceId,
  getLanguage: () => getLocales()[0]?.languageCode || 'en',
});
```

### With react-i18next

```typescript
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';
import { useTranslation } from 'react-i18next';

// In your root component or app initialization
const { i18n } = useTranslation();

configureQrPointClient({
  getClientId: getWebDeviceId,
  getLanguage: () => i18n.language,
});
```

---

## Usage Examples

### Basic Authentication Flow

```typescript
import { AuthService, UsersService } from '@qrpoint/api-client';

// Login
const loginResponse = await AuthService.postApiAuthLogin({
  email: 'user@example.com',
  password: 'password123',
});

// Save token
await saveToken(loginResponse.token);

// Get user profile (token automatically included)
const profile = await AuthService.postApiAuthGetUserProfile();
console.log('User:', profile);
```

### Making API Calls

All services are auto-generated from the OpenAPI spec. The device ID and tenant ID are **automatically included** in every request (if configured).

```typescript
import {
  PlacesService,
  PointsService,
  ActivitiesService
} from '@qrpoint/api-client';

// Get all places
const places = await PlacesService.getApiPlaces();

// Get a specific point
const point = await PointsService.getApiPointsId({ id: 123 });

// Create an activity
const activity = await ActivitiesService.postApiActivities({
  requestBody: {
    name: 'New Activity',
    // ... other fields
  },
});
```

### Error Handling

```typescript
import { AuthService, ApiError } from '@qrpoint/api-client';

try {
  const response = await AuthService.postApiAuthLogin({
    email: 'user@example.com',
    password: 'wrong-password',
  });
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.message);
    console.error('Response:', error.body);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

---

## Advanced Usage

### With Zustand (State Management)

```typescript
import create from 'zustand';
import { configureQrPointClient, getExpoDeviceId } from '@qrpoint/api-client';

interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

configureQrPointClient({
  getClientId: getExpoDeviceId,
  getToken: () => useAuthStore.getState().token || undefined,
});
```

### With Next.js App Router

```typescript
// app/layout.tsx
'use client';

import { useEffect } from 'react';
import { configureQrPointClient, getWebDeviceId } from '@qrpoint/api-client';

export default function RootLayout({ children }) {
  useEffect(() => {
    configureQrPointClient({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      getClientId: getWebDeviceId,
      getToken: () => {
        // Get token from cookies or your auth provider
        return document.cookie
          .split('; ')
          .find(row => row.startsWith('auth_token='))
          ?.split('=')[1];
      },
    });
  }, []);

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### With React Query

```typescript
import { useQuery } from '@tanstack/react-query';
import { PlacesService } from '@qrpoint/api-client';

function PlacesList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['places'],
    queryFn: () => PlacesService.getApiPlaces(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map(place => (
        <div key={place.id}>{place.name}</div>
      ))}
    </div>
  );
}
```

---

## Development

### Regenerate API Client

To regenerate the API client from the OpenAPI spec:

```bash
npm run generate:api
```

### Build

```bash
npm run build
```

---

## Migration Guide

### If you were passing `xClientId` manually:

**Before:**
```typescript
// You had to pass client ID to every call
const clientId = await getClientId();
await AuthService.postApiAuthLogin(requestBody, clientId);
await PlacesService.getApiPlaces(undefined, clientId);
```

**After:**
```typescript
// Configure once
configureQrPointClient({
  getClientId: getExpoDeviceId, // or getWebDeviceId
});

// Client ID is automatically included
await AuthService.postApiAuthLogin(requestBody);
await PlacesService.getApiPlaces();
```

---

## Troubleshooting

### "expo-application not available" warning

This is normal in web builds or if you haven't installed the Expo dependencies. The package will fall back to generating a UUID stored in `AsyncStorage` or `localStorage`.

**Solution:** Install the optional dependencies:
```bash
npx expo install expo-application expo-secure-store
```

### Client ID not being sent

Make sure you've called `configureQrPointClient` before making any API calls:

```typescript
// ✅ Correct - Configure first
configureQrPointClient({ getClientId: getExpoDeviceId });
await AuthService.postApiAuthLogin(requestBody);

// ❌ Wrong - API call before configuration
await AuthService.postApiAuthLogin(requestBody);
configureQrPointClient({ getClientId: getExpoDeviceId });
```

### TypeScript errors

Make sure you have TypeScript 5.0+ installed:
```bash
npm install -D typescript@latest
```

---

## License

ISC

---

## Support

For issues or questions, please open an issue on GitHub.
