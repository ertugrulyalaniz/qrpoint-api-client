import type { StorageTypeDto } from './StorageTypeDto';
export type ApiResponseOfStorageTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | StorageTypeDto);
};
