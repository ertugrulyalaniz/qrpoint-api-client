import type { NotificationDto } from './NotificationDto';
export type ApiResponseOfNotificationDto = {
    statusCode: number | string;
    message: string;
    data: (null | NotificationDto);
};
