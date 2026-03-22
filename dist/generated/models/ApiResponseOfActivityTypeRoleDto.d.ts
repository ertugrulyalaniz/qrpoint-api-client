import type { ActivityTypeRoleDto } from './ActivityTypeRoleDto';
export type ApiResponseOfActivityTypeRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityTypeRoleDto);
};
