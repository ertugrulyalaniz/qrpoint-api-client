import type { EmptyOptions } from './EmptyOptions';
import type { ItemOrderLineDto } from './ItemOrderLineDto';
export type ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions = {
    data: Array<ItemOrderLineDto>;
    options: (null | EmptyOptions);
};
