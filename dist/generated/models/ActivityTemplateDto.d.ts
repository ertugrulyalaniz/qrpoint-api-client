export type ActivityTemplateDto = {
    activityTemplateId?: number | string;
    activityKindId?: number | string;
    activityTypeId?: number | string;
    activityCategoryId?: number | string | null;
    organizationId?: number | string;
    shiftId?: number | string | null;
    assetId?: number | string | null;
    assignedTo?: number | string | null;
    isEnabled?: boolean;
};
