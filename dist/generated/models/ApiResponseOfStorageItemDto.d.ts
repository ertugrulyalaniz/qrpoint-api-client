import type { StorageItemDto } from './StorageItemDto';
export type ApiResponseOfStorageItemDto = {
    statusCode: number | string;
    message: string;
    data: (null | StorageItemDto);
};
