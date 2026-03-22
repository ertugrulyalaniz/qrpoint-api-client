import type { FavoriteAssetDto } from './FavoriteAssetDto';
export type ApiResponseOfFavoriteAssetDto = {
    statusCode: number | string;
    message: string;
    data: (null | FavoriteAssetDto);
};
