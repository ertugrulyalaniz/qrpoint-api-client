export type ActivityTypeDto = {
    activityTypeId?: number | string;
    activityTypeName?: string;
    executionModeId?: number | string;
    categoryId?: number | string;
    assetTypeId?: number | string;
    procedureId?: number | string | null;
    isEnabled?: boolean;
    description?: string | null;
};
