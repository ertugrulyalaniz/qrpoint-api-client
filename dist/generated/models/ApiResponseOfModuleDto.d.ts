import type { ModuleDto } from './ModuleDto';
export type ApiResponseOfModuleDto = {
    statusCode: number | string;
    message: string;
    data: (null | ModuleDto);
};
