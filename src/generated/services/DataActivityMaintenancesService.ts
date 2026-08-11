/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfActivityMaintenanceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityMaintenanceDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityMaintenanceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityMaintenanceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityMaintenanceDto } from '../models/ApiResponseOfActivityMaintenanceDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityMaintenanceDto } from '../models/ApiResponseOfIReadOnlyListOfActivityMaintenanceDto';
import type { ApiResponseOfPagedResultOfActivityMaintenanceDto } from '../models/ApiResponseOfPagedResultOfActivityMaintenanceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataActivityMaintenancesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfActivityMaintenanceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/create',
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
     * @returns ApiResponseOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfActivityMaintenanceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/update',
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
    public static postApiDataActivityMaintenancesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfActivityMaintenanceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfActivityMaintenanceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/bulk',
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
     * @returns ApiResponseOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/getall',
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
     * @returns ApiResponseOfPagedResultOfActivityMaintenanceDto OK
     * @throws ApiError
     */
    public static postApiDataActivityMaintenancesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfActivityMaintenanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-maintenances/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
