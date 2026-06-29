import type { ItemOrderLineDto } from './ItemOrderLineDto';
export type ApiResponseOfItemOrderLineDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemOrderLineDto);
};
