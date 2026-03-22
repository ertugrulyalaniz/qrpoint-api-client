import type { PointAssetAssignmentDto } from './PointAssetAssignmentDto';
export type ApiResponseOfPointAssetAssignmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointAssetAssignmentDto);
};
