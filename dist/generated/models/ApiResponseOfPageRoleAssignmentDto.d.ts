import type { PageRoleAssignmentDto } from './PageRoleAssignmentDto';
export type ApiResponseOfPageRoleAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageRoleAssignmentDto);
};
