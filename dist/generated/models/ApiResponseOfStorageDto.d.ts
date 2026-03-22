import type { StorageDto } from './StorageDto';
export type ApiResponseOfStorageDto = {
    statusCode: number | string;
    message: string;
    data: (null | StorageDto);
};
