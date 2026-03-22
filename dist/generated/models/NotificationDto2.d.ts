export type NotificationDto2 = {
    notificationId: number;
    notificationDate: string;
    heading: string;
    content: string;
    linkUrl: string;
    expireDate: string | null;
    isActive: boolean;
};
