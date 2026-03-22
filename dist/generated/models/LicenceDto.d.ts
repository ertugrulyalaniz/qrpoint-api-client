export type LicenceDto = {
    licenceId?: number | string;
    organizationId?: number | string;
    licenceToken?: string | null;
    maxAccounts?: number | string | null;
    maxAssets?: number | string | null;
    expireTime?: any;
    isExpired?: boolean | null;
    expiredTime?: any;
    isEnabled?: boolean;
    description?: string | null;
};
