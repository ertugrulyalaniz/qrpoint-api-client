import type { LicenceDto } from './LicenceDto';
export type ApiResponseOfLicenceDto = {
    statusCode: number | string;
    message: string;
    data: (null | LicenceDto);
};
