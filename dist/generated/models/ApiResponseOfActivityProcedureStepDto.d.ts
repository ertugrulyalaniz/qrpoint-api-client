import type { ActivityProcedureStepDto } from './ActivityProcedureStepDto';
export type ApiResponseOfActivityProcedureStepDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityProcedureStepDto);
};
