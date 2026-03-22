export type ActivityProcedureDto2 = {
    activityProcedureId: number;
    activityId: number;
    procedureId: number;
    isCompleted: boolean;
    completedAt: string;
    completedBy: number;
    notes: string | null;
    enabled: boolean;
};
