/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiQueryRequestOfGuidData } from '../models/ApiQueryRequestOfGuidData';
import type { ApiResponseOfEmptyData } from '../models/ApiResponseOfEmptyData';
import type { ApiResponseOfUploadFileResult } from '../models/ApiResponseOfUploadFileResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileStorageService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param formData
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUploadFileResult OK
     * @throws ApiError
     */
    public static postApiFileStorageUpload(
        xClientId: string,
        xTenantId: string,
        formData: ({
            ContentType?: string;
            ContentDisposition?: string;
            Headers?: Record<string, Array<string>>;
            Length?: number | string;
            Name?: string;
            FileName?: string;
        } & {
            itemTypeId?: number | string;
        } & {
            isTemp?: boolean;
        }),
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUploadFileResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file-storage/upload',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns any OK
     * @throws ApiError
     */
    public static getApiFileStorage(
        id: string,
        xClientId: string,
        xTenantId: string,
        acceptLanguage?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/file-storage/{id}',
            path: {
                'id': id,
            },
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    public static postApiFileStorageCommit(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfGuidData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEmptyData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file-storage/commit',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
                'x-tenant-id': xTenantId,
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
