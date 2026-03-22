import type { ActionRoleDto } from './ActionRoleDto';
export type ApiResponseOfActionRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActionRoleDto);
};
