import type { ActivityTriggerTypeDto } from './ActivityTriggerTypeDto';
export type ApiResponseOfActivityTriggerTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityTriggerTypeDto);
};
