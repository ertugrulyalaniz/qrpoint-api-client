import type { EmptyOptions } from './EmptyOptions';
import type { ItemCartDto } from './ItemCartDto';
export type ApiCommandRequestOfListOfItemCartDtoAndEmptyOptions = {
    data: Array<ItemCartDto>;
    options: (null | EmptyOptions);
};
