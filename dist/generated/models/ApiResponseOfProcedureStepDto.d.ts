import type { ProcedureStepDto } from './ProcedureStepDto';
export type ApiResponseOfProcedureStepDto = {
    statusCode: number | string;
    message: string;
    data: (null | ProcedureStepDto);
};
