import type { EmptyOptions } from './EmptyOptions';
import type { ItemCartLineDto } from './ItemCartLineDto';
export type ApiCommandRequestOfListOfItemCartLineDtoAndEmptyOptions = {
    data: Array<ItemCartLineDto>;
    options: (null | EmptyOptions);
};
