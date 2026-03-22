import type { EmptyOptions } from './EmptyOptions';
import type { WorkDto } from './WorkDto';
export type ApiCommandRequestOfListOfWorkDtoAndEmptyOptions = {
    data: Array<WorkDto>;
    options: (null | EmptyOptions);
};
