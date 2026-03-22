import type { UploadFileResult } from './UploadFileResult';
export type ApiResponseOfUploadFileResult = {
    statusCode: number | string;
    message: string;
    data: (null | UploadFileResult);
};
