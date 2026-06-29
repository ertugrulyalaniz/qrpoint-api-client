import type { LocationAccountDto } from './LocationAccountDto';
export type PagedResultOfLocationAccountDto = {
    items: Array<LocationAccountDto>;
    totalCount: number | string;
    pageIndex: number | string;
    pageSize: number | string;
    totalPages: number | string;
    isOutOfRange: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
};
