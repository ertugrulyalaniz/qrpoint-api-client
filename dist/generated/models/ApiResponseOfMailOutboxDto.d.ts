import type { MailOutboxDto } from './MailOutboxDto';
export type ApiResponseOfMailOutboxDto = {
    statusCode: number | string;
    message: string;
    data: (null | MailOutboxDto);
};
