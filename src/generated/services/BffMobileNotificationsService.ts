/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfGetAllMobileNotificationsResult } from '../models/ApiResponseOfGetAllMobileNotificationsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BffMobileNotificationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileNotificationsResult OK
     * @throws ApiError
     */
    public static postApiBffMobileNotificationsGetall(
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGetAllMobileNotificationsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bff/mobile/notifications/getall',
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
