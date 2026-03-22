/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCompleteWorkOpsData } from '../models/ApiCommandRequestOfCompleteWorkOpsData';
import type { ApiCommandRequestOfStartWorkOpsData } from '../models/ApiCommandRequestOfStartWorkOpsData';
import type { ApiResponseOfCompleteWorkOpsResult } from '../models/ApiResponseOfCompleteWorkOpsResult';
import type { ApiResponseOfStartWorkOpsResult } from '../models/ApiResponseOfStartWorkOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsShiftService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfStartWorkOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsShiftStart(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfStartWorkOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfStartWorkOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/shift/start',
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
     * @returns ApiResponseOfCompleteWorkOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsShiftComplete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfCompleteWorkOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCompleteWorkOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/shift/complete',
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
