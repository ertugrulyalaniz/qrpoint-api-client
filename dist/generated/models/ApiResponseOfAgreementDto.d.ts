import type { AgreementDto } from './AgreementDto';
export type ApiResponseOfAgreementDto = {
    statusCode: number | string;
    message: string;
    data: (null | AgreementDto);
};
