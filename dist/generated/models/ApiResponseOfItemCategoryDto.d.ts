import type { ItemCategoryDto } from './ItemCategoryDto';
export type ApiResponseOfItemCategoryDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCategoryDto);
};
