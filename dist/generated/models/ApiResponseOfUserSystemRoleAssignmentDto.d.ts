import type { UserSystemRoleAssignmentDto } from './UserSystemRoleAssignmentDto';
export type ApiResponseOfUserSystemRoleAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | UserSystemRoleAssignmentDto);
};
