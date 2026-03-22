import type { PlaceTypeDto } from './PlaceTypeDto';
export type ApiResponseOfPlaceTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | PlaceTypeDto);
};
