import type { CompleteWorkOpsResult } from './CompleteWorkOpsResult';
export type ApiResponseOfCompleteWorkOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | CompleteWorkOpsResult);
};
