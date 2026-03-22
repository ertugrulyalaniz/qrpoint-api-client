import type { ActivityFeedbackDto } from './ActivityFeedbackDto';
export type ApiResponseOfActivityFeedbackDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityFeedbackDto);
};
