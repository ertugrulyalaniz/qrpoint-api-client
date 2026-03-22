import type { ScanOpsActionDto } from './ScanOpsActionDto';
export type ScanOpsResultDto = {
    assetId?: number | string | null;
    pointId?: number | string | null;
    actions?: Array<ScanOpsActionDto>;
};
