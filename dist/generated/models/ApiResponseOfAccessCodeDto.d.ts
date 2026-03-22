import type { AccessCodeDto } from './AccessCodeDto';
export type ApiResponseOfAccessCodeDto = {
    statusCode: number;
    message: string;
    data: AccessCodeDto;
};
