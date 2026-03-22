import type { PageAttributeDto } from './PageAttributeDto';
export type ApiResponseOfPageAttributeDto = {
    statusCode: number | string;
    message: string;
    data: (null | PageAttributeDto);
};
