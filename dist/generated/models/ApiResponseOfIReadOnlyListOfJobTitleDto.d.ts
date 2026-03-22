import type { JobTitleDto2 } from './JobTitleDto2';
export type ApiResponseOfIReadOnlyListOfJobTitleDto = {
    statusCode: number;
    message: string;
    data: Array<JobTitleDto2> | null;
};
