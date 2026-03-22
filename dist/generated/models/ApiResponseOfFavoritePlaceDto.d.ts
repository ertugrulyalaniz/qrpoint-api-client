import type { FavoritePlaceDto } from './FavoritePlaceDto';
export type ApiResponseOfFavoritePlaceDto = {
    statusCode: number | string;
    message: string;
    data: (null | FavoritePlaceDto);
};
