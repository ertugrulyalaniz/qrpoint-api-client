import type { ActivityProcedureDto } from './ActivityProcedureDto';
export type ApiResponseOfActivityProcedureDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityProcedureDto);
};
