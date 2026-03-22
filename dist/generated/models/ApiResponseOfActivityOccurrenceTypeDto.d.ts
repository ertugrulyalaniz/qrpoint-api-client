import type { ActivityOccurrenceTypeDto } from './ActivityOccurrenceTypeDto';
export type ApiResponseOfActivityOccurrenceTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityOccurrenceTypeDto);
};
