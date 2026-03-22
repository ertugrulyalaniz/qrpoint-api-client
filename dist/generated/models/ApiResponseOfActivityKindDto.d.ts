import type { ActivityKindDto } from './ActivityKindDto';
export type ApiResponseOfActivityKindDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityKindDto);
};
