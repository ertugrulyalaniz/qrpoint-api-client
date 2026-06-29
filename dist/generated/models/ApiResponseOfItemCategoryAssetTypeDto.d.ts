import type { ItemCategoryAssetTypeDto } from './ItemCategoryAssetTypeDto';
export type ApiResponseOfItemCategoryAssetTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCategoryAssetTypeDto);
};
