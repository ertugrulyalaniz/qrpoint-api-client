import type { PointAssetDto } from './PointAssetDto';
export type ApiResponseOfPointAssetDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointAssetDto);
};
