import type { EmptyOptions } from './EmptyOptions';
import type { ItemDto } from './ItemDto';
export type ApiCommandRequestOfListOfItemDtoAndEmptyOptions = {
    data: Array<ItemDto>;
    options: (null | EmptyOptions);
};
