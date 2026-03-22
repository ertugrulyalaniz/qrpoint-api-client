export type UserAccountModel = {
    organizationId?: number | string;
    organizationName?: string;
    accountId?: number | string;
    firstName: string;
    lastName: string;
    fullName?: string | null;
    jobPositionId?: number | string;
    phoneNumber: string;
    eMail?: string | null;
    registrationNumber?: string | null;
    isEnabled?: boolean;
    locked?: boolean;
    description?: string | null;
};
