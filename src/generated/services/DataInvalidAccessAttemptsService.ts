/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfInvalidAccessAttemptDto } from '../models/ApiResponseOfInvalidAccessAttemptDto';
import type { ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto } from '../models/ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto';
import type { ApiResponseOfPagedResultOfInvalidAccessAttemptDto } from '../models/ApiResponseOfPagedResultOfInvalidAccessAttemptDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataInvalidAccessAttemptsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/create',
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
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/update',
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
    public static postApiDataInvalidAccessAttemptsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/bulk',
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
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/getall',
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
     * @returns ApiResponseOfPagedResultOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    public static postApiDataInvalidAccessAttemptsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfInvalidAccessAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/getpaged',
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
    public static postApiDataInvalidAccessAttemptsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/invalid-access-attempts/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
