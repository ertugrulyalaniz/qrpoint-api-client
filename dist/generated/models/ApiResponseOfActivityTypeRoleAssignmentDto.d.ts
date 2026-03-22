import type { ActivityTypeRoleAssignmentDto } from './ActivityTypeRoleAssignmentDto';
export type ApiResponseOfActivityTypeRoleAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityTypeRoleAssignmentDto);
};
