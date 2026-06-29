import type { ItemOrderDto } from './ItemOrderDto';
export type ApiResponseOfItemOrderDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemOrderDto);
};
