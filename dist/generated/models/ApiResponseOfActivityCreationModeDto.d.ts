import type { ActivityCreationModeDto } from './ActivityCreationModeDto';
export type ApiResponseOfActivityCreationModeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityCreationModeDto);
};
