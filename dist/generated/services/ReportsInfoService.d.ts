import type { ApiResponseOfPointInfoReportResult } from '../models/ApiResponseOfPointInfoReportResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ReportsInfoService {
    /**
     * @param qrCode
     * @returns ApiResponseOfPointInfoReportResult OK
     * @throws ApiError
     */
    static getApiReportsInfoPoint(qrCode: string): CancelablePromise<ApiResponseOfPointInfoReportResult>;
}
