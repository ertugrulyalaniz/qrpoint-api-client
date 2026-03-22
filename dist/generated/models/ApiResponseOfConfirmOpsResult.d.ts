import type { ConfirmOpsResult } from './ConfirmOpsResult';
export type ApiResponseOfConfirmOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | ConfirmOpsResult);
};
