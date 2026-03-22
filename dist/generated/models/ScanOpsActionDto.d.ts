import type { ActivityStatusEnum } from './ActivityStatusEnum';
export type ScanOpsActionDto = {
    actionId?: number | string;
    actionName: string;
    status: ActivityStatusEnum;
    activityTypes?: any[] | null;
};
