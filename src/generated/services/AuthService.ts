/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfEmptyData } from '../models/ApiResponseOfEmptyData';
import type { CheckUserAccountApiRequest } from '../models/CheckUserAccountApiRequest';
import type { LoginApiRequest } from '../models/LoginApiRequest';
import type { LoginApiResponse } from '../models/LoginApiResponse';
import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { RefreshTokenApiResponse } from '../models/RefreshTokenApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    public static postApiAuthLoginPinRequest(
        xClientId: string,
        requestBody: LoginPinRequestApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEmptyData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login-pin-request',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns LoginApiResponse OK
     * @throws ApiError
     */
    public static postApiAuthLogin(
        xClientId: string,
        requestBody: LoginApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<LoginApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    public static postApiAuthLogout(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEmptyData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/logout',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns RefreshTokenApiResponse OK
     * @throws ApiError
     */
    public static postApiAuthRefreshToken(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<RefreshTokenApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/refresh-token',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    public static postApiAuthCheckToken(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEmptyData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/check-token',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    public static postApiAuthCheckUserAccount(
        xClientId: string,
        requestBody: CheckUserAccountApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEmptyData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/check-user-account',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
