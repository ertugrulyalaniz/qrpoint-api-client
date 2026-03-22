import type { JobPositionDto } from './JobPositionDto';
export type ApiResponseOfJobPositionDto = {
    statusCode: number | string;
    message: string;
    data: (null | JobPositionDto);
};
