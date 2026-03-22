/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdData } from '../models/ApiCommandRequestOfIdData';
import type { ApiResponseOfRegisterDeviceOpsResult } from '../models/ApiResponseOfRegisterDeviceOpsResult';
import type { ApiResponseOfUnregisterDeviceOpsResult } from '../models/ApiResponseOfUnregisterDeviceOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsDeviceService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfRegisterDeviceOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsDeviceRegister(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfRegisterDeviceOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/device/register',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUnregisterDeviceOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsDeviceUnregister(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUnregisterDeviceOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/device/unregister',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
