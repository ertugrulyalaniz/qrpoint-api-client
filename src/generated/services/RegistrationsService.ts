/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateUserEmployeeApiRequest } from '../models/ActivateUserEmployeeApiRequest';
import type { ApproveAgreementApiRequest } from '../models/ApproveAgreementApiRequest';
import type { RegisterOrganizationApiRequest } from '../models/RegisterOrganizationApiRequest';
import type { RegisterUserApiRequest } from '../models/RegisterUserApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegistrationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    public static postApiRegistrationsRegisterOrganization(
        xClientId: string,
        requestBody: RegisterOrganizationApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/registrations/register-organization',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    public static postApiRegistrationsRegisterUser(
        xClientId: string,
        requestBody: RegisterUserApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/registrations/register-user',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    public static postApiRegistrationsApproveAgreement(
        xClientId: string,
        requestBody: ApproveAgreementApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/registrations/approve-agreement',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    public static postApiRegistrationsActivateUserContact(
        xClientId: string,
        requestBody: ActivateUserEmployeeApiRequest,
        acceptLanguage?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/registrations/activate-user-contact',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns string OK
     * @throws ApiError
     */
    public static getApiRegistrationsSystem(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/registrations/system',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
