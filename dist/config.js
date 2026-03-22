"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureQrPointClient = void 0;
// src/config.ts
const OpenAPI_1 = require("./generated/core/OpenAPI");
/**
 * Call this once in your app (e.g. app bootstrap)
 * before using any Service methods.
 */
const configureQrPointClient = (config = {}) => {
    OpenAPI_1.OpenAPI.BASE = config.baseURL ?? 'http://api.qrpoint.com.tr:6202';
    OpenAPI_1.OpenAPI.TOKEN = async () => {
        const token = await config.getToken?.();
        return token ?? '';
    };
    OpenAPI_1.OpenAPI.WITH_CREDENTIALS = config.withCredentials ?? false;
    // Set client ID, tenant ID, and Accept-Language in global headers
    if (config.getClientId || config.getTenantId || config.getLanguage) {
        OpenAPI_1.OpenAPI.HEADERS = async () => {
            const [clientId, tenantId, language] = await Promise.all([
                config.getClientId?.(),
                config.getTenantId?.(),
                config.getLanguage?.(),
            ]);
            const headers = {};
            if (clientId) {
                headers['x-client-id'] = clientId;
            }
            if (tenantId) {
                headers['x-tenant-id'] = tenantId;
            }
            if (language) {
                headers['accept-language'] = language;
            }
            return headers;
        };
    }
};
exports.configureQrPointClient = configureQrPointClient;
