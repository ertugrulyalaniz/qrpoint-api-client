import type { ActivityStatusDto } from './ActivityStatusDto';
export type ApiResponseOfActivityStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityStatusDto);
};
