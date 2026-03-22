import type { LocationTypeDto } from './LocationTypeDto';
export type ApiResponseOfLocationTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | LocationTypeDto);
};
