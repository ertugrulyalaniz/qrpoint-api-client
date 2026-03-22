/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAddressTypeDto } from '../models/ApiResponseOfAddressTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataAddressTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAddressTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAddressTypesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAddressTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/address-types/getbyid',
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
     * @returns ApiResponseOfAddressTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAddressTypesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAddressTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/address-types/getall',
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
     * @returns ApiResponseOfAddressTypeDto OK
     * @throws ApiError
     */
    public static postApiDataAddressTypesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAddressTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/address-types/getpaged',
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
