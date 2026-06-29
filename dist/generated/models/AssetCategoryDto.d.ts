export type AssetCategoryDto = {
    assetCategoryId?: number | string;
    assetCategoryName?: string;
    organizationId?: number | string;
    procedureId?: number | string | null;
    isEnabled?: boolean;
    description?: string | null;
};
