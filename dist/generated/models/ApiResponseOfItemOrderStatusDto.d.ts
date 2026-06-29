import type { ItemOrderStatusDto } from './ItemOrderStatusDto';
export type ApiResponseOfItemOrderStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemOrderStatusDto);
};
