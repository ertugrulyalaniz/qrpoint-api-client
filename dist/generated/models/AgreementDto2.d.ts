export type AgreementDto2 = {
    agreementId: number;
    agreementTypeId: number;
    userId: number;
    accountId: number | null;
    enabled: boolean;
    expireTime: string;
    expired: boolean;
    expiredTime: string | null;
    approved: boolean;
    approvedTime: string | null;
};
