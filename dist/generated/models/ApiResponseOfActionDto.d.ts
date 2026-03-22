import type { ActionDto } from './ActionDto';
export type ApiResponseOfActionDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActionDto);
};
