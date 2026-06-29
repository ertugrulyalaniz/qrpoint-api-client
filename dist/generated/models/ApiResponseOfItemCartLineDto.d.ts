import type { ItemCartLineDto } from './ItemCartLineDto';
export type ApiResponseOfItemCartLineDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCartLineDto);
};
