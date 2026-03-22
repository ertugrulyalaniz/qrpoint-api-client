import type { RegisterDeviceOpsResult } from './RegisterDeviceOpsResult';
export type ApiResponseOfRegisterDeviceOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | RegisterDeviceOpsResult);
};
