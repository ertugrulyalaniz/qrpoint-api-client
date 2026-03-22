import type { ActivityTypeDto } from './ActivityTypeDto';
export type ApiResponseOfActivityTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityTypeDto);
};
