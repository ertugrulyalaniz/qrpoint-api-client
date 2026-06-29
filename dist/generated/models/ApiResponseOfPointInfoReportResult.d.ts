import type { PointInfoReportResult } from './PointInfoReportResult';
export type ApiResponseOfPointInfoReportResult = {
    statusCode: number | string;
    message: string;
    data: (null | PointInfoReportResult);
};
