import type { ItemCartDto } from './ItemCartDto';
export type ApiResponseOfItemCartDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCartDto);
};
