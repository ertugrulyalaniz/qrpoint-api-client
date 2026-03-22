import type { PlaceStatusDto } from './PlaceStatusDto';
export type ApiResponseOfPlaceStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | PlaceStatusDto);
};
