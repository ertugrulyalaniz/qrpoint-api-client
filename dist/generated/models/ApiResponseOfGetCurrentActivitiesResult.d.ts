import type { GetCurrentActivitiesResult } from './GetCurrentActivitiesResult';
export type ApiResponseOfGetCurrentActivitiesResult = {
    statusCode: number | string;
    message: string;
    data: (null | GetCurrentActivitiesResult);
};
