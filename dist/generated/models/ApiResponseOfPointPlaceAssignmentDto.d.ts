import type { PointPlaceAssignmentDto } from './PointPlaceAssignmentDto';
export type ApiResponseOfPointPlaceAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointPlaceAssignmentDto);
};
