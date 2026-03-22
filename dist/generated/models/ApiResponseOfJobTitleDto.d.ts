import type { JobTitleDto } from './JobTitleDto';
export type ApiResponseOfJobTitleDto = {
    statusCode: number | string;
    message: string;
    data: (null | JobTitleDto);
};
