import type { PlaceDto } from './PlaceDto';
export type ApiResponseOfPlaceDto = {
    statusCode: number | string;
    message: string;
    data: (null | PlaceDto);
};
