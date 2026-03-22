export type ActivityFeedbackDto2 = {
    activityFeedbackId: number;
    activityId: number;
    feedbackAt: string;
    feedbackBy: number;
    feedbackScore: number | null;
    comment: string | null;
    enabled: boolean;
};
