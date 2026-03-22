/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfAssignPointOpsData } from '../models/ApiCommandRequestOfAssignPointOpsData';
import type { ApiCommandRequestOfGeneratePointOpsData } from '../models/ApiCommandRequestOfGeneratePointOpsData';
import type { ApiCommandRequestOfUnassignPointOpsData } from '../models/ApiCommandRequestOfUnassignPointOpsData';
import type { ApiResponseOfAssignPointOpsResult } from '../models/ApiResponseOfAssignPointOpsResult';
import type { ApiResponseOfGeneratePointsOpsResult } from '../models/ApiResponseOfGeneratePointsOpsResult';
import type { ApiResponseOfUnassignPointOpsResult } from '../models/ApiResponseOfUnassignPointOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsPointService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssignPointOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsPointAssign(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfAssignPointOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAssignPointOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/point/assign',
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
     * @returns ApiResponseOfUnassignPointOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsPointUnassign(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfUnassignPointOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUnassignPointOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/point/unassign',
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
     * @returns ApiResponseOfGeneratePointsOpsResult OK
     * @throws ApiError
     */
    public static postApiOpsPointGenerate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfGeneratePointOpsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfGeneratePointsOpsResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/point/generate',
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
