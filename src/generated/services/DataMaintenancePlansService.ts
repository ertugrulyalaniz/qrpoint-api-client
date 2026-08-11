/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfMaintenancePlanDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfMaintenancePlanDtoAndEmptyOptions';
import type { ApiCommandRequestOfMaintenancePlanDtoAndEmptyOptions } from '../models/ApiCommandRequestOfMaintenancePlanDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfMaintenancePlanDto } from '../models/ApiResponseOfIReadOnlyListOfMaintenancePlanDto';
import type { ApiResponseOfMaintenancePlanDto } from '../models/ApiResponseOfMaintenancePlanDto';
import type { ApiResponseOfPagedResultOfMaintenancePlanDto } from '../models/ApiResponseOfPagedResultOfMaintenancePlanDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataMaintenancePlansService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenancePlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/create',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenancePlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/update',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/delete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenancePlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/batch',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenancePlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/bulk',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/getbyid',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPagedResultOfMaintenancePlanDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlansGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfMaintenancePlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plans/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
