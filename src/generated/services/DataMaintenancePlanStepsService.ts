/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfMaintenancePlanStepDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfMaintenancePlanStepDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfMaintenancePlanStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfMaintenancePlanStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfMaintenancePlanStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfMaintenancePlanStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto } from '../models/ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto';
import type { ApiResponseOfMaintenancePlanStepDto } from '../models/ApiResponseOfMaintenancePlanStepDto';
import type { ApiResponseOfPagedResultOfMaintenancePlanStepDto } from '../models/ApiResponseOfPagedResultOfMaintenancePlanStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataMaintenancePlanStepsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsDeletedGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/deleted/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsDeletedGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/deleted/getall',
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
     * @returns ApiResponseOfPagedResultOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsDeletedGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/deleted/getpaged',
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
    public static postApiDataMaintenancePlanStepsDeletedRestore(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/deleted/restore',
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
    public static postApiDataMaintenancePlanStepsDeletedDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/deleted/delete',
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
     * @returns ApiResponseOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenancePlanStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/create',
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
     * @returns ApiResponseOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfMaintenancePlanStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/update',
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
    public static postApiDataMaintenancePlanStepsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenancePlanStepDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfMaintenancePlanStepDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/bulk',
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
     * @returns ApiResponseOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/getall',
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
     * @returns ApiResponseOfPagedResultOfMaintenancePlanStepDto OK
     * @throws ApiError
     */
    public static postApiDataMaintenancePlanStepsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfMaintenancePlanStepDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/getpaged',
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
    public static postApiDataMaintenancePlanStepsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/maintenance-plan-steps/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
