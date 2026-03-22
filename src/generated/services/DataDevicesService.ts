/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfDeviceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDeviceDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfDeviceDto } from '../models/ApiResponseOfDeviceDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDeviceDto } from '../models/ApiResponseOfIReadOnlyListOfDeviceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataDevicesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfDeviceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/create',
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
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfDeviceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/update',
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
    public static postApiDataDevicesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/bulk',
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
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/getbyid',
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
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/getall',
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
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    public static postApiDataDevicesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfDeviceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/devices/getpaged',
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
