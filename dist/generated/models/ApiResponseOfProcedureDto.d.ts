import type { ProcedureDto } from './ProcedureDto';
export type ApiResponseOfProcedureDto = {
    statusCode: number | string;
    message: string;
    data: (null | ProcedureDto);
};
