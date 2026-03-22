import type { PageRoleDto } from './PageRoleDto';
export type ApiResponseOfPageRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageRoleDto);
};
