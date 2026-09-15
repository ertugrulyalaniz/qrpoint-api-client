/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemOrderLineDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfItemOrderLineDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemOrderLineDto } from '../models/ApiResponseOfIReadOnlyListOfItemOrderLineDto';
import type { ApiResponseOfItemOrderLineDto } from '../models/ApiResponseOfItemOrderLineDto';
import type { ApiResponseOfPagedResultOfItemOrderLineDto } from '../models/ApiResponseOfPagedResultOfItemOrderLineDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataItemOrderLinesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesDeletedGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/deleted/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesDeletedGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/deleted/getall',
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
     * @returns ApiResponseOfPagedResultOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesDeletedGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/deleted/getpaged',
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
    public static postApiDataItemorderlinesDeletedRestore(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/deleted/restore',
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
    public static postApiDataItemorderlinesDeletedDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/deleted/delete',
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
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/create',
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
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/update',
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
    public static postApiDataItemorderlinesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfItemOrderLineDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/bulk',
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
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/getall',
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
     * @returns ApiResponseOfPagedResultOfItemOrderLineDto OK
     * @throws ApiError
     */
    public static postApiDataItemorderlinesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfItemOrderLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/getpaged',
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
    public static postApiDataItemorderlinesGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/itemorderlines/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
