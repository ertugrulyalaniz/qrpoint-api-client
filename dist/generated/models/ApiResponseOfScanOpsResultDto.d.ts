import type { ScanOpsResultDto } from './ScanOpsResultDto';
export type ApiResponseOfScanOpsResultDto = {
    statusCode: number | string;
    message: string;
    data: (null | ScanOpsResultDto);
};
