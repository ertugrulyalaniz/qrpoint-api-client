export type AssetDto = {
    assetId?: number | string;
    assetName?: string;
    assetTypeId?: number | string;
    organizationId?: number | string;
    locationId?: number | string | null;
    statusId?: number | string;
    isEnabled?: boolean;
    description?: string | null;
};
