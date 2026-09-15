/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfDemandCategoryAccountDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDemandCategoryAccountDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDemandCategoryAccountDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfDemandCategoryAccountDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfDemandCategoryAccountDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDemandCategoryAccountDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfDemandCategoryAccountDto } from '../models/ApiResponseOfDemandCategoryAccountDto';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto } from '../models/ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto';
import type { ApiResponseOfPagedResultOfDemandCategoryAccountDto } from '../models/ApiResponseOfPagedResultOfDemandCategoryAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataDemandCategoryAccountsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfDemandCategoryAccountDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/create',
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
     * @returns ApiResponseOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfDemandCategoryAccountDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/update',
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
    public static postApiDataDemandCategoryAccountsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfDemandCategoryAccountDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfDemandCategoryAccountDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/bulk',
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
     * @returns ApiResponseOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/getall',
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
     * @returns ApiResponseOfPagedResultOfDemandCategoryAccountDto OK
     * @throws ApiError
     */
    public static postApiDataDemandCategoryAccountsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfDemandCategoryAccountDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/getpaged',
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
    public static postApiDataDemandCategoryAccountsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/demand-category-accounts/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
