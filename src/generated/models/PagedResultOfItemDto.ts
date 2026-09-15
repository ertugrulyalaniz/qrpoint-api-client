/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemDto } from './ItemDto';
export type PagedResultOfItemDto = {
    items: Array<ItemDto>;
    totalCount: number | string;
    pageIndex: number | string;
    pageSize: number | string;
    totalPages: number | string;
    isOutOfRange: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
};

