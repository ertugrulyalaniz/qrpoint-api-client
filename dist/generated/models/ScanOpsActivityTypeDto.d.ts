import type { ActivityStatusEnum } from './ActivityStatusEnum';
export type ScanOpsActivityTypeDto = {
    activityTypeId?: number | string;
    activityTypeName: string;
    status: ActivityStatusEnum;
};
