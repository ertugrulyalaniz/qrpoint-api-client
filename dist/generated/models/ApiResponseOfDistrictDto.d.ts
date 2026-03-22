import type { DistrictDto } from './DistrictDto';
export type ApiResponseOfDistrictDto = {
    statusCode: number | string;
    message: string;
    data: (null | DistrictDto);
};
