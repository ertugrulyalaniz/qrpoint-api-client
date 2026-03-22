/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCancelActivityOpsData } from '../models/ApiCommandRequestOfCancelActivityOpsData';
import type { ApiCommandRequestOfCompleteActivityOpsData } from '../models/ApiCommandRequestOfCompleteActivityOpsData';
import type { ApiCommandRequestOfStartActivityOpsData } from '../models/ApiCommandRequestOfStartActivityOpsData';
import type { ApiResponseOfCancelActivityOpsResult } from '../models/ApiResponseOfCancelActivityOpsResult';
import type { ApiResponseOfCompleteActivityOpsResult } from '../models/ApiResponseOfCompleteActivityOpsResult';
import type { ApiResponseOfStartActivityOpsResult } from '../models/ApiResponseOfStartActivityOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsActivityService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfStartActivityOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsActivityStart(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfStartActivityOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfStartActivityOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/activity/start',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCompleteActivityOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsActivityComplete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfCompleteActivityOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCompleteActivityOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/activity/complete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCancelActivityOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsActivityCancel(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfCancelActivityOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCancelActivityOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/activity/cancel',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
