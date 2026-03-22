import type { SmsOutboxDto } from './SmsOutboxDto';
export type ApiResponseOfSmsOutboxDto = {
    statusCode: number | string;
    message: string;
    data: (null | SmsOutboxDto);
};
