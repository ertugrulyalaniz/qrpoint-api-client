/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityProcedureStepDto } from '../models/ApiResponseOfActivityProcedureStepDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityProcedureStepDto } from '../models/ApiResponseOfIReadOnlyListOfActivityProcedureStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataActivityProcedureStepsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsCreate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/create',
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
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsUpdate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/update',
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
    public static postApiDataActivityProcedureStepsDelete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsBatch(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsBulk(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/bulk',
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
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsGetbyid(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/getbyid',
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
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsGetall(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/getall',
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
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    public static postApiDataActivityProcedureStepsGetpaged(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityProcedureStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-procedure-steps/getpaged',
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
