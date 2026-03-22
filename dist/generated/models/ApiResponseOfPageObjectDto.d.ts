import type { PageObjectDto } from './PageObjectDto';
export type ApiResponseOfPageObjectDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageObjectDto);
};
