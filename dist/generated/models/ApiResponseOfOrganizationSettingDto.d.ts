import type { OrganizationSettingDto } from './OrganizationSettingDto';
export type ApiResponseOfOrganizationSettingDto = {
    statusCode: number | string;
    message: string;
    data: (null | OrganizationSettingDto);
};
