import type { OrganizationDto } from './OrganizationDto';
export type ApiResponseOfOrganizationDto = {
    statusCode: number | string;
    message: string;
    data: (null | OrganizationDto);
};
