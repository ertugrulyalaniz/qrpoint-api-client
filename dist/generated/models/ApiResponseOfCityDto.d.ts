import type { CityDto } from './CityDto';
export type ApiResponseOfCityDto = {
    statusCode: number | string;
    message: string;
    data: (null | CityDto);
};
