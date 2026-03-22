import type { ActivityProcedureStepStatusDto } from './ActivityProcedureStepStatusDto';
export type ApiResponseOfActivityProcedureStepStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityProcedureStepStatusDto);
};
