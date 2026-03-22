import type { AccountRoleAssignmentDto } from './AccountRoleAssignmentDto';
export type ApiResponseOfAccountRoleAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | AccountRoleAssignmentDto);
};
