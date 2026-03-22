export type OrganizationDto = {
    organizationId?: number | string;
    organizationName?: string;
    taxOffice?: string;
    taxNo?: string;
    isPublicInstitution?: boolean;
    isEnabled?: boolean;
    description?: string | null;
};
