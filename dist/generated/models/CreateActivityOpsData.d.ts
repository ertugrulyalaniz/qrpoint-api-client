export type CreateActivityOpsData = {
    activityTime: string;
    activityKindId: number | string;
    activityTypeId: number | string;
    creationModeId: number | string;
    occurrenceTypeId: number | string;
    organizationId: number | string;
    shiftId: number | string;
    assetId: number | string;
    statusId: number | string;
    isEnabled: boolean;
    demandId: number | string | null;
};
