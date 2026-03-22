import type { MailOutboxStatusDto } from './MailOutboxStatusDto';
export type ApiResponseOfMailOutboxStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | MailOutboxStatusDto);
};
