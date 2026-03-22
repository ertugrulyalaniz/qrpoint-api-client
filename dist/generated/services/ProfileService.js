"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProfileService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMProfileGetall(requestBody, xDeviceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/bff/m/profile/getall',
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
exports.ProfileService = ProfileService;
