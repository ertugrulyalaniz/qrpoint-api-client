import type { GetAllMobileDataResult } from './GetAllMobileDataResult';
export type ApiResponseOfGetAllMobileDataResult = {
    statusCode: number | string;
    message: string;
    data: (null | GetAllMobileDataResult);
};
