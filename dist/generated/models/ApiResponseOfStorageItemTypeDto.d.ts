import type { StorageItemTypeDto } from './StorageItemTypeDto';
export type ApiResponseOfStorageItemTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | StorageItemTypeDto);
};
