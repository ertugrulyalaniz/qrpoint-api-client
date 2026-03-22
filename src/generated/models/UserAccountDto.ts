/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAccountOrganizationDto } from './UserAccountOrganizationDto';
import type { UserAccountRoleDto } from './UserAccountRoleDto';
export type UserAccountDto = {
    organization?: UserAccountOrganizationDto;
    accountId?: number | string;
    firstName: string;
    lastName: string;
    fullName?: string | null;
    jobPositionId?: number | string;
    phoneNumber: string;
    eMail?: string | null;
    registrationNumber?: string | null;
    isDefault?: boolean;
    isEnabled?: boolean;
    description?: string | null;
    roles?: Array<UserAccountRoleDto>;
};

