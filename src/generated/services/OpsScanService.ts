/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfCodeData } from '../models/ApiCommandRequestOfCodeData';
import type { ApiResponseOfScanOpsResultDto } from '../models/ApiResponseOfScanOpsResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OpsScanService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfScanOpsResultDto OK
     * @throws ApiError
     */
    public static postApiOpsScanQrcode(
        xClientId: string,
        xTenantId: string,
        requestBody: ApiCommandRequestOfCodeData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfScanOpsResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ops/scan/qrcode',
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
