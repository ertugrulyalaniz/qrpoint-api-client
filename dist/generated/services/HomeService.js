"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class HomeService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMHomeGetall(requestBody, xDeviceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/bff/m/home/getall',
            headers: {
                'x-client-id': xDeviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
exports.HomeService = HomeService;
