/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfAttachmentTypeDto } from '../models/ApiResponseOfAttachmentTypeDto';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIReadOnlyListOfAttachmentTypeDto } from '../models/ApiResponseOfIReadOnlyListOfAttachmentTypeDto';
import type { ApiResponseOfPagedResultOfAttachmentTypeDto } from '../models/ApiResponseOfPagedResultOfAttachmentTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataAttachmentTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesDeletedGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/deleted/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesDeletedGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/deleted/getall',
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
     * @returns ApiResponseOfPagedResultOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesDeletedGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/deleted/getpaged',
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
     * @returns ApiResponseOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/getall',
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
     * @returns ApiResponseOfPagedResultOfAttachmentTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentTypesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfAttachmentTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/getpaged',
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
    public static postApiDataAttachmentTypesGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachment-types/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
