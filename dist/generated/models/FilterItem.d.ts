import type { FilterOp } from './FilterOp';
export type FilterItem = {
    field?: string;
    op?: FilterOp;
    value?: any;
};
