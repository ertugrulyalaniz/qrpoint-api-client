import type { IdData } from './IdData';
export type ApiResponseOfIdData = {
    statusCode: number | string;
    message: string;
    data: (null | IdData);
};
