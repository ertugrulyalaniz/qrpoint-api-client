import type { ItemCategoryRoleDto } from './ItemCategoryRoleDto';
export type ApiResponseOfItemCategoryRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | ItemCategoryRoleDto);
};
