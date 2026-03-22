import type { NotificationRecipientDto } from './NotificationRecipientDto';
export type ApiResponseOfNotificationRecipientDto = {
    statusCode: number | string;
    message: string;
    data: (null | NotificationRecipientDto);
};
