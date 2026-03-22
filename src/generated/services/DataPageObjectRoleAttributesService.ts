/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto';
import type { ApiResponseOfPageObjectRoleAttributeDto } from '../models/ApiResponseOfPageObjectRoleAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataPageObjectRoleAttributesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/create',
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
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/update',
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
    public static postApiDataPageObjectRoleAttributesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/bulk',
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
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/getbyid',
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
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/getall',
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
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    public static postApiDataPageObjectRoleAttributesGetpageobjectroled(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/page-object-role-attributes/getpageobjectroled',
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
