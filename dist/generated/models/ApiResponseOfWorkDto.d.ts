import type { WorkDto } from './WorkDto';
export type ApiResponseOfWorkDto = {
    statusCode: number | string;
    message: string;
    data: (null | WorkDto);
};
