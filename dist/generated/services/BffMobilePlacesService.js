"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BffMobilePlacesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BffMobilePlacesService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMobilePlacesGetall(xDeviceId, xTenantId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/bff/mobile/places/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xDeviceId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMobilePlacesGetfavorites(xDeviceId, xTenantId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/bff/mobile/places/getfavorites',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xDeviceId,
                'x-tenant-id': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
exports.BffMobilePlacesService = BffMobilePlacesService;
