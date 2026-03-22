/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfStartActivityOpsData } from '../models/ApiCommandRequestOfStartActivityOpsData';
import type { ApiResponseOfGetCurrentActivitiesResult } from '../models/ApiResponseOfGetCurrentActivitiesResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReportsActivitiesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetCurrentActivitiesResult OK
     * @throws ApiError
     */
    public static postApiReportsActivitiesGetCurrentActivities(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfStartActivityOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGetCurrentActivitiesResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reports/activities/get-current-activities',
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
