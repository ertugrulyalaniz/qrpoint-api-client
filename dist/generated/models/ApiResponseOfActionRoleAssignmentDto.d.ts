import type { ActionRoleAssignmentDto } from './ActionRoleAssignmentDto';
export type ApiResponseOfActionRoleAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActionRoleAssignmentDto);
};
