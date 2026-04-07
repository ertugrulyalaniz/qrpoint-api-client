import type { DemandCategoryRoleDto } from './DemandCategoryRoleDto';
export type ApiResponseOfDemandCategoryRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | DemandCategoryRoleDto);
};
