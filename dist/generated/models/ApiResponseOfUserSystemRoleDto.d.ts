import type { UserSystemRoleDto } from './UserSystemRoleDto';
export type ApiResponseOfUserSystemRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | UserSystemRoleDto);
};
