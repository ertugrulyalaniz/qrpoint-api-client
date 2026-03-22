"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityOccurrenceTypesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ActivityOccurrenceTypesService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiActivityOccurrenceTypesGetbyid(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-occurrence-types/getbyid',
            headers: {
                'x-client-id': xDeviceId,
                'x-tenant-id': xTenantId,
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
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiActivityOccurrenceTypesGetall(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-occurrence-types/getall',
            headers: {
                'x-client-id': xDeviceId,
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
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiActivityOccurrenceTypesGetpaged(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-occurrence-types/getpaged',
            headers: {
                'x-client-id': xDeviceId,
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
exports.ActivityOccurrenceTypesService = ActivityOccurrenceTypesService;
