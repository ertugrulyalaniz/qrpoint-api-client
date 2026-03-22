import type { SmsOutboxStatusDto } from './SmsOutboxStatusDto';
export type ApiResponseOfSmsOutboxStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | SmsOutboxStatusDto);
};
