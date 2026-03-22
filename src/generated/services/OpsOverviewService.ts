/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfOverviewOpsData } from '../models/ApiCommandRequestOfOverviewOpsData';
import type { ApiResponseOfOverviewOpsResult } from '../models/ApiResponseOfOverviewOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsOverviewService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOverviewOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsContextOverview(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfOverviewOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOverviewOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/context/overview',
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
