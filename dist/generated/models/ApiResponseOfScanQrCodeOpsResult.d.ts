import type { ScanQrCodeOpsResult } from './ScanQrCodeOpsResult';
export type ApiResponseOfScanQrCodeOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | ScanQrCodeOpsResult);
};
