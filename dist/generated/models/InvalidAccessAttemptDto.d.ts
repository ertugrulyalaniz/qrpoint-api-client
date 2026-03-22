export type InvalidAccessAttemptDto = {
    invalidAccessAttemptId?: number | string;
    attemptTime?: any;
    deviceCode?: string;
    platform?: string;
    phoneNumber?: string;
    ipAddress?: string;
    attemptCount?: number | string;
    reasonId?: number | string;
    expireTime?: any;
    isExpired?: boolean;
};
