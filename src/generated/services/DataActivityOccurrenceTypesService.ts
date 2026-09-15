/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfActivityOccurrenceTypeDto } from '../models/ApiResponseOfActivityOccurrenceTypeDto';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto } from '../models/ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto';
import type { ApiResponseOfPagedResultOfActivityOccurrenceTypeDto } from '../models/ApiResponseOfPagedResultOfActivityOccurrenceTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataActivityOccurrenceTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesDeletedGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/deleted/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesDeletedGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/deleted/getall',
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
     * @returns ApiResponseOfPagedResultOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesDeletedGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/deleted/getpaged',
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
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/getall',
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
     * @returns ApiResponseOfPagedResultOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfActivityOccurrenceTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/getpaged',
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
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEntityStatisticsDto OK
     * @throws ApiError
     */
    public static postApiDataActivityOccurrenceTypesGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/activity-occurrence-types/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
