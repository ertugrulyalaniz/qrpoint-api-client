import type { ItemDto } from './ItemDto';
export type ApiResponseOfItemDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemDto);
};
