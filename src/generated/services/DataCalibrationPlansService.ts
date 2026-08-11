/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCalibrationPlanDtoAndEmptyOptions } from '../models/ApiCommandRequestOfCalibrationPlanDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfCalibrationPlanDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfCalibrationPlanDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfCalibrationPlanDto } from '../models/ApiResponseOfCalibrationPlanDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfCalibrationPlanDto } from '../models/ApiResponseOfIReadOnlyListOfCalibrationPlanDto';
import type { ApiResponseOfPagedResultOfCalibrationPlanDto } from '../models/ApiResponseOfPagedResultOfCalibrationPlanDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataCalibrationPlansService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfCalibrationPlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/create',
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
     * @returns ApiResponseOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfCalibrationPlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/update',
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
    public static postApiDataCalibrationPlansDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfCalibrationPlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfCalibrationPlanDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/bulk',
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
     * @returns ApiResponseOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/getall',
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
     * @returns ApiResponseOfPagedResultOfCalibrationPlanDto OK
     * @throws ApiError
     */
    public static postApiDataCalibrationPlansGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfCalibrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/calibration-plans/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
