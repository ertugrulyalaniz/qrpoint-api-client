/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssetDto = {
    assetId?: number | string;
    assetCode?: string | null;
    assetName?: string;
    assetTypeId?: number | string;
    organizationId?: number | string;
    categoryId?: number | string | null;
    locationId?: number | string | null;
    brandId?: number | string | null;
    brandModelId?: number | string | null;
    serialNo?: string | null;
    expireDate?: any;
    validUntil?: any;
    efficiencyRate?: number | string | null;
    hasWarranty?: boolean;
    warrantyExpireDate?: any;
    isOutsourced?: boolean;
    outsourceTypeId?: number | string | null;
    outsourceFirmId?: number | string | null;
    manufacturingYear?: number | string | null;
    usageStartYear?: number | string | null;
    requiresLocationVerification?: boolean;
    requiresCleaning?: boolean;
    requiresPeriodicCleaning?: boolean;
    requiresCalibration?: boolean;
    requiresMaintenance?: boolean;
    isInventoryTracked?: boolean;
    isDemandEnabled?: boolean;
    statusId?: number | string;
    cleaningStatusId?: number | string;
    isDirty?: boolean;
    isEnabled?: boolean;
    description?: string | null;
};

