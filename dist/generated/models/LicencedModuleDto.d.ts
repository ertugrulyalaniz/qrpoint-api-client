export type LicencedModuleDto = {
    licencedModuleId?: number | string;
    organizationId?: number | string;
    licenceId?: number | string;
    moduleId?: number | string;
    expireTime?: string | null;
    isExpired?: boolean | null;
    expiredTime?: string | null;
    isEnabled?: boolean;
};
