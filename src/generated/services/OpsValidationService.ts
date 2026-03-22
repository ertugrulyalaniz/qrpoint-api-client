/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCheckOpsData } from '../models/ApiCommandRequestOfCheckOpsData';
import type { ApiCommandRequestOfConfirmOpsData } from '../models/ApiCommandRequestOfConfirmOpsData';
import type { ApiResponseOfCheckOpsResult } from '../models/ApiResponseOfCheckOpsResult';
import type { ApiResponseOfConfirmOpsResult } from '../models/ApiResponseOfConfirmOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsValidationService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCheckOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsValidationCheck(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfCheckOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCheckOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/validation/check',
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
     * @returns ApiResponseOfConfirmOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsValidationConfirm(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfConfirmOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfConfirmOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/validation/confirm',
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
