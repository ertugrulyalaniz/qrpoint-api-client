import type { CountryDto } from './CountryDto';
export type ApiResponseOfCountryDto = {
    statusCode: number | string;
    message: string;
    data: (null | CountryDto);
};
