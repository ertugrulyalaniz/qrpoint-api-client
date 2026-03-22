import type { NavigationRoleDto } from './NavigationRoleDto';
export type ApiResponseOfNavigationRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | NavigationRoleDto);
};
