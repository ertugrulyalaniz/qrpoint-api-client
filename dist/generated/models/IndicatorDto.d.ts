import type { ActivityDto } from './ActivityDto';
export type IndicatorDto = {
    totalActivityCount: number | string;
    inProgressActivityCount: number | string;
    overdueActivityCount: number | string;
    completedActivityCount: number | string;
    assetCount: number | string;
    deviceCount: number | string;
    locationCount: number | string;
    accountCount: number | string;
    completionRate: number | string;
    slaComplianceRate: number | string;
    lastActivities: Array<ActivityDto>;
};
