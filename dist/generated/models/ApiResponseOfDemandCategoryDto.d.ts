import type { DemandCategoryDto } from './DemandCategoryDto';
export type ApiResponseOfDemandCategoryDto = {
    statusCode: number | string;
    message: string;
    data: (null | DemandCategoryDto);
};
