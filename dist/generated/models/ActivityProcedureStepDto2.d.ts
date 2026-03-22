export type ActivityProcedureStepDto2 = {
    activityProcedureStepId: number;
    activityProcedureId: number;
    stepNo: number;
    statusId: number;
    enabled: boolean;
    comment: string | null;
    rejectionReason: string | null;
    cancellationReason: string | null;
};
