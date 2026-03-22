"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettingsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class OrganizationSettingsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsCreate(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/create',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsUpdate(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/update',
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
    static postApiOrganizationSettingsDelete(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsBatch(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsBulk(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/bulk',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetbyid(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/getbyid',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetall(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/getall',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetpaged(requestBody, xDeviceId, xTenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/organization-settings/getpaged',
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
exports.OrganizationSettingsService = OrganizationSettingsService;
