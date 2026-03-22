import type { AttachmentDto } from './AttachmentDto';
export type ApiResponseOfAttachmentDto = {
    statusCode: number | string;
    message: string;
    data: (null | AttachmentDto);
};
