/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfGetAllMobileAssetsResult } from '../models/ApiResponseOfGetAllMobileAssetsResult';
import type { ApiResponseOfGetAllMobileFavoriteAssetsResult } from '../models/ApiResponseOfGetAllMobileFavoriteAssetsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BffMobileAssetsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileAssetsResult OK
     * @throws ApiError
     */
    public static postApiBffMobileAssetsGetall(
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGetAllMobileAssetsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bff/mobile/assets/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileFavoriteAssetsResult OK
     * @throws ApiError
     */
    public static postApiBffMobileAssetsGetfavorites(
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGetAllMobileFavoriteAssetsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bff/mobile/assets/getfavorites',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
