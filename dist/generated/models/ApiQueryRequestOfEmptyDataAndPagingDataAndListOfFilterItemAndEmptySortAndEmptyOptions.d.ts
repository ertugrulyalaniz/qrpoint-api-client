import type { EmptyData } from './EmptyData';
import type { EmptyOptions } from './EmptyOptions';
import type { EmptySort } from './EmptySort';
import type { PagingData } from './PagingData';
export type ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndEmptySortAndEmptyOptions = {
    data: (null | EmptyData);
    paging: (null | PagingData);
    filters: any[] | null;
    sort: (null | EmptySort);
    options: (null | EmptyOptions);
};
