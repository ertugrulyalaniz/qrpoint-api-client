import type { LocationDto } from './LocationDto';
export type ApiResponseOfLocationDto = {
    statusCode: number | string;
    message: string;
    data: (null | LocationDto);
};
