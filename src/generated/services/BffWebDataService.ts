/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfGetAllMobileDataResult } from '../models/ApiResponseOfGetAllMobileDataResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BffWebDataService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileDataResult OK
     * @throws ApiError
     */
    public static postApiBffWebDataGetall(
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGetAllMobileDataResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bff/web/data/getall',
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
