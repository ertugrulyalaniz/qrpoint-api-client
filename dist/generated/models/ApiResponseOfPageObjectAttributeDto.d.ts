import type { PageObjectAttributeDto } from './PageObjectAttributeDto';
export type ApiResponseOfPageObjectAttributeDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageObjectAttributeDto);
};
