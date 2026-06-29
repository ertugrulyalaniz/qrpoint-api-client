"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsInfoService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ReportsInfoService {
    /**
     * @param qrCode
     * @returns ApiResponseOfPointInfoReportResult OK
     * @throws ApiError
     */
    static getApiReportsInfoPoint(qrCode) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/reports/info/point/{qrCode}',
            path: {
                'qrCode': qrCode,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
exports.ReportsInfoService = ReportsInfoService;
