export type WorkDto2 = {
    workId: number;
    organizationId: number;
    shiftId: number;
    plannedStartTime: string | null;
    plannedEndTime: string | null;
    shiftSupervisorId: number | null;
    startedAt: string | null;
    completedAt: string | null;
    enabled: boolean;
    comment: string | null;
    plannedDuration: number | null;
    actualDuration: number | null;
    efficiency: number | null;
    qualityScore: number | null;
};
