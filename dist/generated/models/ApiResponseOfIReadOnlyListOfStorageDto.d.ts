import type { StorageDto2 } from './StorageDto2';
export type ApiResponseOfIReadOnlyListOfStorageDto = {
    statusCode: number;
    message: string;
    data: Array<StorageDto2> | null;
};
