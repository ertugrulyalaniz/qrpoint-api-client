export type StorageItemDto = {
    storageItemId?: number | string;
    storageId?: number | string;
    itemTypeId?: number | string;
    itemGuid?: string;
    relativePath?: string;
    physicalFileName?: string;
    originalFileName?: string;
    contentType?: string;
    size?: number | string;
    isTemp?: boolean;
    isCommitted?: boolean;
    isEnabled?: boolean;
    description?: string | null;
    createdAt?: any;
    committedAt?: any;
};
