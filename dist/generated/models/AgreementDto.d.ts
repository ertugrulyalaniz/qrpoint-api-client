export type AgreementDto = {
    agreementId?: number | string;
    agreementTypeId?: number | string;
    userId?: number | string;
    accountId?: number | string | null;
    isEnabled?: boolean;
    expireTime?: any;
    isExpired?: boolean;
    expiredTime?: any;
    approved?: boolean;
    approvedTime?: any;
};
