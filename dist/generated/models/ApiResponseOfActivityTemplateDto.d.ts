import type { ActivityTemplateDto } from './ActivityTemplateDto';
export type ApiResponseOfActivityTemplateDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityTemplateDto);
};
