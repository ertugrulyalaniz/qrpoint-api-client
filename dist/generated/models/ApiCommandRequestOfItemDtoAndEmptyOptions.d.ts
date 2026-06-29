import type { EmptyOptions } from './EmptyOptions';
import type { ItemDto } from './ItemDto';
export type ApiCommandRequestOfItemDtoAndEmptyOptions = {
    data: ItemDto;
    options: (null | EmptyOptions);
};
