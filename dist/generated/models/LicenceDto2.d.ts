export type LicenceDto2 = {
    licenceId: number;
    organizationId: number;
    licenseToken: string | null;
    maxAccounts: number | null;
    maxPlaces: number | null;
    expireTime: string | null;
    expired: boolean | null;
    expiredTime: string | null;
    enabled: boolean;
    description: string | null;
};
