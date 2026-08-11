/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntervalUnitDto } from './IntervalUnitDto';
export type PagedResultOfIntervalUnitDto = {
    items: Array<IntervalUnitDto>;
    totalCount: number | string;
    pageIndex: number | string;
    pageSize: number | string;
    totalPages: number | string;
    isOutOfRange: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
};

