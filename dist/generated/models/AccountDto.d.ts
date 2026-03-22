export type AccountDto = {
    accountId?: number | string;
    organizationId?: number | string;
    firstName?: string;
    lastName?: string;
    jobPositionId?: number | string;
    phoneNumber?: string;
    eMail?: string;
    registrationNumber?: string | null;
    isEnabled?: boolean;
    description?: string | null;
};
