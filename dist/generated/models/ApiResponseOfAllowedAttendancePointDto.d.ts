import type { AllowedAttendancePointDto } from './AllowedAttendancePointDto';
export type ApiResponseOfAllowedAttendancePointDto = {
    statusCode: number | string;
    message: string;
    data: (null | AllowedAttendancePointDto);
};
