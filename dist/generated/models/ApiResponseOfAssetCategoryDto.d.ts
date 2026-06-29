import type { AssetCategoryDto } from './AssetCategoryDto';
export type ApiResponseOfAssetCategoryDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetCategoryDto);
};
