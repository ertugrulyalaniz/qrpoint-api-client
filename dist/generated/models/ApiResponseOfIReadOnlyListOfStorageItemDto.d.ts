import type { StorageItemDto2 } from './StorageItemDto2';
export type ApiResponseOfIReadOnlyListOfStorageItemDto = {
    statusCode: number;
    message: string;
    data: Array<StorageItemDto2> | null;
};
