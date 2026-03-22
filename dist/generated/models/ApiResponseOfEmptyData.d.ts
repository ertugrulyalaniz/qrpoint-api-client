import type { EmptyData } from './EmptyData';
export type ApiResponseOfEmptyData = {
    statusCode: number | string;
    message: string;
    data: (null | EmptyData);
};
