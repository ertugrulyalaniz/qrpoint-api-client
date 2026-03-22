"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RegistrationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    static postApiRegistrationsRegisterOrganization(xClientId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiRegistrationsRegisterUser(xClientId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiRegistrationsApproveAgreement(xClientId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiRegistrationsActivateUserContact(xClientId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiRegistrationsSystem(xClientId, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.RegistrationsService = RegistrationsService;
