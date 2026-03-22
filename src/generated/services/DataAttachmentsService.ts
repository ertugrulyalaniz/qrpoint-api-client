/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfAttachmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAttachmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAttachmentDto } from '../models/ApiResponseOfAttachmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAttachmentDto } from '../models/ApiResponseOfIReadOnlyListOfAttachmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataAttachmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsCreate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfAttachmentDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/create',
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
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsUpdate(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfAttachmentDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/update',
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
    public static postApiDataAttachmentsDelete(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsBatch(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsBulk(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/bulk',
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
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsGetbyid(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/getbyid',
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
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsGetall(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/getall',
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
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    public static postApiDataAttachmentsGetpaged(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfAttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/attachments/getpaged',
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
