/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfMaintenanceTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfMaintenanceTypeDtoAndEmptyOptions';
import type { ApiCommandRequestOfMaintenanceTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfMaintenanceTypeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfMaintenanceTypeDto } from '../models/ApiResponseOfIReadOnlyListOfMaintenanceTypeDto';
import type { ApiResponseOfMaintenanceTypeDto } from '../models/ApiResponseOfMaintenanceTypeDto';
import type { ApiResponseOfPagedResultOfMaintenanceTypeDto } from '../models/ApiResponseOfPagedResultOfMaintenanceTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataMaintenanceTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenanceTypeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/create',
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
     * @returns ApiResponseOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenanceTypeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/update',
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
    public static postApiDataMaintenanceTypesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenanceTypeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenanceTypeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/bulk',
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
     * @returns ApiResponseOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/getall',
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
     * @returns ApiResponseOfPagedResultOfMaintenanceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenanceTypesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfMaintenanceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-types/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
