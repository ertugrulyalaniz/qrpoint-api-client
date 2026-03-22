import type { InvalidAccessAttemptDto } from './InvalidAccessAttemptDto';
export type ApiResponseOfInvalidAccessAttemptDto = {
    statusCode: number | string;
    message: string;
    data: (null | InvalidAccessAttemptDto);
};
