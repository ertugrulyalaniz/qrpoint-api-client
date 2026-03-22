import type { DepartmentDto } from './DepartmentDto';
export type ApiResponseOfDepartmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | DepartmentDto);
};
