"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityProceduresService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ActivityProceduresService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresCreate(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/create',
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
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresUpdate(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/update',
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
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityProceduresDelete(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/delete',
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
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityProceduresCancel(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/cancel',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresBatch(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresBulk(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/bulk',
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
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresGetbyid(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/getbyid',
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
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresGetall(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/getall',
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
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiActivityProceduresGetpaged(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/activity-procedures/getpaged',
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
exports.ActivityProceduresService = ActivityProceduresService;
