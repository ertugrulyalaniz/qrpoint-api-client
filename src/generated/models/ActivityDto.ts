/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityDto = {
    activityId?: number | string;
    activityTime?: any;
    activityKindId?: number | string;
    activityTypeId?: number | string;
    activityCategoryId?: number | string | null;
    activityRuleId?: number | string;
    creationModeId?: number | string;
    occurrenceTypeId?: number | string;
    relatedActivityId?: number | string | null;
    organizationId?: number | string;
    shiftId?: number | string;
    pointId?: number | string | null;
    assetId?: number | string;
    demandId?: number | string | null;
    assignedTo?: number | string | null;
    openedBy?: number | string | null;
    approvedBy?: number | string | null;
    startedBy?: number | string | null;
    completedBy?: number | string | null;
    cancelledBy?: number | string | null;
    scheduledTime?: any;
    expireDuration?: string | null;
    plannedDuration?: string | null;
    actualDuration?: string | null;
    startedAt?: any;
    completedAt?: any;
    cancelledAt?: any;
    postponedAt?: any;
    statusId?: number | string;
    isEnabled?: boolean;
    efficiency?: number | string | null;
    qualityScore?: number | string | null;
    comment?: string | null;
    cancellationReason?: string | null;
    postponedReason?: string | null;
};

