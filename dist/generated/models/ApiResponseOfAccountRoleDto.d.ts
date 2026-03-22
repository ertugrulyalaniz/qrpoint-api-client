import type { AccountRoleDto } from './AccountRoleDto';
export type ApiResponseOfAccountRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | AccountRoleDto);
};
