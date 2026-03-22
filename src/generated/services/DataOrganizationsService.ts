/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationDto';
import type { ApiResponseOfOrganizationDto } from '../models/ApiResponseOfOrganizationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataOrganizationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsCreate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/create',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsUpdate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/update',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsDelete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/delete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsBatch(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/batch',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsBulk(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/bulk',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsGetbyid(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/getbyid',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsGetall(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationsGetpaged(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organizations/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
