/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfJsonElement } from '../models/ApiCommandRequestOfJsonElement';
import type { ApiResponseOfJsonElement } from '../models/ApiResponseOfJsonElement';
import type { ApiResponseOfUploadFileResult } from '../models/ApiResponseOfUploadFileResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationSettingsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUploadFileResult OK
     * @throws ApiError
     */
    public static postApiOrganizationSettingsSavesettings(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfJsonElement,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUploadFileResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/savesettings',
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
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJsonElement OK
     * @throws ApiError
     */
    public static getApiOrganizationSettingsGetsettings(
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfJsonElement> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organization-settings/getsettings',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
