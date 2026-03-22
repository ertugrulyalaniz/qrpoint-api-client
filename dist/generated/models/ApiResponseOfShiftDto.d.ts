import type { ShiftDto } from './ShiftDto';
export type ApiResponseOfShiftDto = {
    statusCode: number | string;
    message: string;
    data: (null | ShiftDto);
};
