"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DataService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMDataGetall(requestBody, xDeviceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/bff/m/data/getall',
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
exports.DataService = DataService;
