import type { InvalidAccessAttemptReasonDto } from './InvalidAccessAttemptReasonDto';
export type ApiResponseOfInvalidAccessAttemptReasonDto = {
    statusCode: number | string;
    message: string;
    data: (null | InvalidAccessAttemptReasonDto);
};
