export type ActivityProcedureDto = {
    activityProcedureId?: number | string;
    activityId?: number | string;
    procedureId?: number | string;
    isCompleted?: boolean;
    completedBy?: number | string;
    completedAt?: any;
    notes?: string | null;
    isEnabled?: boolean;
};
