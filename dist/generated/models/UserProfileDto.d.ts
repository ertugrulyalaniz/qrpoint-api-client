export type UserProfileDto = {
    userId?: number | string;
    phoneNumber: string;
    accounts?: any[] | null;
    pictureId?: string | null;
};
