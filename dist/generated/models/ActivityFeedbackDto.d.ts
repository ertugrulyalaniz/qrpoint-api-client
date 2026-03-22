export type ActivityFeedbackDto = {
    activityFeedbackId?: number | string;
    activityId?: number | string;
    feedbackBy?: number | string;
    feedbackAt?: any;
    feedbackScore?: number | string | null;
    comment?: string | null;
    isEnabled?: boolean;
};
