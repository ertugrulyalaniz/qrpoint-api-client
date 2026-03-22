import type { ActivityDto } from './ActivityDto';
export type ApiResponseOfActivityDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityDto);
};
