import type { LicencedModuleDto } from './LicencedModuleDto';
export type ApiResponseOfLicencedModuleDto = {
    statusCode: number | string;
    message: string;
    data: (null | LicencedModuleDto);
};
