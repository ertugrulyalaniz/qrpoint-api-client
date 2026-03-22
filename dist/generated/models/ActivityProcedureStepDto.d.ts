export type ActivityProcedureStepDto = {
    activityProcedureStepId?: number | string;
    activityProcedureId?: number | string;
    stepNo?: number | string;
    statusId?: number | string;
    isEnabled?: boolean;
    comment?: string | null;
    rejectionReason?: string | null;
    cancellationReason?: string | null;
};
