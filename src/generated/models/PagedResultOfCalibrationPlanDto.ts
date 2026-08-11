/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalibrationPlanDto } from './CalibrationPlanDto';
export type PagedResultOfCalibrationPlanDto = {
    items: Array<CalibrationPlanDto>;
    totalCount: number | string;
    pageIndex: number | string;
    pageSize: number | string;
    totalPages: number | string;
    isOutOfRange: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
};

