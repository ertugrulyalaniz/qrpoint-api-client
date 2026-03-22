export type AccessCodeDto2 = {
    accessCodeId: number;
    pin: string;
    userId: number;
    enabled: boolean;
    expireTime: string;
    expired: boolean;
    expiredTime: string | null;
};
