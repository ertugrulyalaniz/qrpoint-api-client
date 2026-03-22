import type { PageRoleAttributeDto } from './PageRoleAttributeDto';
export type ApiResponseOfPageRoleAttributeDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageRoleAttributeDto);
};
