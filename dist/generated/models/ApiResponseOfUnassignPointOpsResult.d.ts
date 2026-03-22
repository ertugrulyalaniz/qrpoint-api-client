import type { UnassignPointOpsResult } from './UnassignPointOpsResult';
export type ApiResponseOfUnassignPointOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | UnassignPointOpsResult);
};
