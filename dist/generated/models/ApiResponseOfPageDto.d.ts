import type { PageDto } from './PageDto';
export type ApiResponseOfPageDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageDto);
};
