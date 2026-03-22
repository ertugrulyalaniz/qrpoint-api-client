import type { SystemRoleDto } from './SystemRoleDto';
export type ApiResponseOfSystemRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | SystemRoleDto);
};
