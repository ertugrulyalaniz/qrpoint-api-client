import type { AccountDto } from './AccountDto';
export type ApiResponseOfAccountDto = {
    statusCode: number | string;
    message: string;
    data: (null | AccountDto);
};
