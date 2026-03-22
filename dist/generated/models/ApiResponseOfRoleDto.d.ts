import type { RoleDto } from './RoleDto';
export type ApiResponseOfRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | RoleDto);
};
