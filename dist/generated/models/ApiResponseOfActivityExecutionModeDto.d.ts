import type { ActivityExecutionModeDto } from './ActivityExecutionModeDto';
export type ApiResponseOfActivityExecutionModeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityExecutionModeDto);
};
