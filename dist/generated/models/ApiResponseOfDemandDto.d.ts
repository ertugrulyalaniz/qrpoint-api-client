import type { DemandDto } from './DemandDto';
export type ApiResponseOfDemandDto = {
    statusCode: number | string;
    message: string;
    data: (null | DemandDto);
};
