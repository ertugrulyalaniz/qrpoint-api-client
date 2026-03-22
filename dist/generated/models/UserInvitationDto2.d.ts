export type UserInvitationDto2 = {
    userInvitationId: number;
    accountId: number;
    enabled: boolean;
    expireTime: string;
    expired: boolean;
    expiredTime: string | null;
};
