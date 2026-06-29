export type ItemCategoryDto = {
    itemCategoryId?: number | string;
    itemCategoryName?: string;
    organizationId?: number | string;
    parentId?: number | string | null;
    isEnabled?: boolean;
    description?: string | null;
};
