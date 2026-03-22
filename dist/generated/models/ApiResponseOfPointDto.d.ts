import type { PointDto } from './PointDto';
export type ApiResponseOfPointDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointDto);
};
