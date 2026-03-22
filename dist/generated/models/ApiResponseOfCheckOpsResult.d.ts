import type { CheckOpsResult } from './CheckOpsResult';
export type ApiResponseOfCheckOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | CheckOpsResult);
};
