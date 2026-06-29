import type { ItemCartStatusDto } from './ItemCartStatusDto';
export type ApiResponseOfItemCartStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCartStatusDto);
};
