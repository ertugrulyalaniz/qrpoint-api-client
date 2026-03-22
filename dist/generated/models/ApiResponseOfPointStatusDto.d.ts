import type { PointStatusDto } from './PointStatusDto';
export type ApiResponseOfPointStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | PointStatusDto);
};
