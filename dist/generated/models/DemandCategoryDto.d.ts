export type DemandCategoryDto = {
    demandCategoryId?: number | string;
    demandCategoryName?: string;
    organizationId?: number | string;
    parentId?: number | string | null;
    isEnabled?: boolean;
    description?: string | null;
};
