/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfSystemRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfSystemRoleDto } from '../models/ApiResponseOfIReadOnlyListOfSystemRoleDto';
import type { ApiResponseOfSystemRoleDto } from '../models/ApiResponseOfSystemRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataSystemRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/create',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/update',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
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
    public static postApiDataSystemRolesDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/delete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/batch',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/bulk',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/getbyid',
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
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    public static postApiDataSystemRolesGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfSystemRoleDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/system-roles/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
