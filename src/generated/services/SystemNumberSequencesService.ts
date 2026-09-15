/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfNumberSequenceRequestData } from '../models/ApiCommandRequestOfNumberSequenceRequestData';
import type { ApiQueryRequestOfNumberSequenceRequestData } from '../models/ApiQueryRequestOfNumberSequenceRequestData';
import type { ApiResponseOfNumberSequenceValue } from '../models/ApiResponseOfNumberSequenceValue';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemNumberSequencesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNumberSequenceValue OK
     * @throws ApiError
     */
    public static postApiSystemNumberSequencesGetnext(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfNumberSequenceRequestData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfNumberSequenceValue> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/system/number-sequences/getnext',
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
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNumberSequenceValue OK
     * @throws ApiError
     */
    public static postApiSystemNumberSequencesGetcurrent(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiQueryRequestOfNumberSequenceRequestData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfNumberSequenceValue> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/system/number-sequences/getcurrent',
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
            },
        });
    }
}
