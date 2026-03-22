import type { StartWorkOpsResult } from './StartWorkOpsResult';
export type ApiResponseOfStartWorkOpsResult = {
    statusCode: number | string;
    message: string;
    data: (null | StartWorkOpsResult);
};
