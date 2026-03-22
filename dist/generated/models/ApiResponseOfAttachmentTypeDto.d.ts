import type { AttachmentTypeDto } from './AttachmentTypeDto';
export type ApiResponseOfAttachmentTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | AttachmentTypeDto);
};
