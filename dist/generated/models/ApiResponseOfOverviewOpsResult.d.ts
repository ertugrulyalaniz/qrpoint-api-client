import type { OverviewOpsResult } from './OverviewOpsResult';
export type ApiResponseOfOverviewOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | OverviewOpsResult);
};
