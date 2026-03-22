import type { PointAllocationDto } from './PointAllocationDto';
export type ApiResponseOfPointAllocationDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointAllocationDto);
};
