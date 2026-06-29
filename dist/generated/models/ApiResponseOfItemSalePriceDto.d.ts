import type { ItemSalePriceDto } from './ItemSalePriceDto';
export type ApiResponseOfItemSalePriceDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemSalePriceDto);
};
