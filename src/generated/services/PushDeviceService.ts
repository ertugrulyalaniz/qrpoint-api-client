/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfRegisterPushDeviceResult } from '../models/ApiResponseOfRegisterPushDeviceResult';
import type { ApiResponseOfUnregisterPushDeviceResult } from '../models/ApiResponseOfUnregisterPushDeviceResult';
import type { RegisterPushDeviceApiRequest } from '../models/RegisterPushDeviceApiRequest';
import type { UnregisterPushDeviceApiRequest } from '../models/UnregisterPushDeviceApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PushDeviceService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfRegisterPushDeviceResult OK
     * @throws ApiError
     */
    public static postApiPushDeviceRegister(
        xClientId: string,
        requestBody: RegisterPushDeviceApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfRegisterPushDeviceResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/push-device/register',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
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
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUnregisterPushDeviceResult OK
     * @throws ApiError
     */
    public static postApiPushDeviceUnregister(
        xClientId: string,
        requestBody: UnregisterPushDeviceApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUnregisterPushDeviceResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/push-device/unregister',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
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
