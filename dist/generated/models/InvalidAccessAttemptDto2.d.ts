export type InvalidAccessAttemptDto2 = {
    invalidAccessAttemptId: number;
    attemptTime: string;
    deviceCode: string;
    platform: string;
    phoneNumber: string;
    ipAddress: string;
    attemptCount: number;
    reasonId: number;
    expireTime: string;
    isExpired: boolean;
};
