import type { LocationAccountDto } from './LocationAccountDto';
export type ApiResponseOfLocationAccountDto = {
    statusCode: number | string;
    message: string;
    data: (null | LocationAccountDto);
};
