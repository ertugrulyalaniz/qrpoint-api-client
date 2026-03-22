"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPlaceStatusService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DataPlaceStatusService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetbyid(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-status/getbyid',
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
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetall(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-status/getall',
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
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetpaged(xDeviceId, requestBody, acceptLanguage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/data/place-status/getpaged',
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
exports.DataPlaceStatusService = DataPlaceStatusService;
