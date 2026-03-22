import type { ActivityCategoryDto } from './ActivityCategoryDto';
export type ApiResponseOfActivityCategoryDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityCategoryDto);
};
