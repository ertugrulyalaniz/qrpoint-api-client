import type { AssignPointOpsResult } from './AssignPointOpsResult';
export type ApiResponseOfAssignPointOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | AssignPointOpsResult);
};
