/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCountryDtoAndEmptyOptions } from '../models/ApiCommandRequestOfCountryDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfCountryDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfCountryDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfCountryDto } from '../models/ApiResponseOfCountryDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfCountryDto } from '../models/ApiResponseOfIReadOnlyListOfCountryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataCountriesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfCountryDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/create',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfCountryDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/update',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    public static postApiDataCountriesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/delete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfCountryDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/batch',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfCountryDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/bulk',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/getbyid',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCountryDto OK
     * @throws ApiError
     */
    public static postApiDataCountriesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfCountryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/countries/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
