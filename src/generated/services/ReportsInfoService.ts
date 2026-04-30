/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseOfPointInfoReportResult } from '../models/ApiResponseOfPointInfoReportResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReportsInfoService {
    /**
     * @param qrCode
     * @returns ApiResponseOfPointInfoReportResult OK
     * @throws ApiError
     */
    public static getApiReportsInfoPoint(
        qrCode: string,
    ): CancelablePromise<ApiResponseOfPointInfoReportResult> {
        return __request(OpenAPI, {
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
