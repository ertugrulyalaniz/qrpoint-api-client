/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfActivityTemplateDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityTemplateDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityTemplateDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityTemplateDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityTemplateDto } from '../models/ApiResponseOfActivityTemplateDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityTemplateDto } from '../models/ApiResponseOfIReadOnlyListOfActivityTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataActivityTemplatesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesCreate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfActivityTemplateDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/create',
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
     * @returns ApiResponseOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesUpdate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfActivityTemplateDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/update',
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
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesDelete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesBatch(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfActivityTemplateDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesBulk(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfActivityTemplateDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/bulk',
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
     * @returns ApiResponseOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesGetbyid(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/getbyid',
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
     * @returns ApiResponseOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesGetall(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/getall',
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
     * @returns ApiResponseOfActivityTemplateDto OK
     * @throws ApiError
     */
    public static postApiDataActivityTemplatesGetpaged(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityTemplateDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-templates/getpaged',
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
