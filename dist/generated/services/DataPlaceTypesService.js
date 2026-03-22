"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPlaceTypesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DataPlaceTypesService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetbyid(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-types/getbyid',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xDeviceId,
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
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetall(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-types/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xDeviceId,
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
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetpaged(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-types/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xDeviceId,
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
exports.DataPlaceTypesService = DataPlaceTypesService;
