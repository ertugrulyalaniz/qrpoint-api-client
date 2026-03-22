import type { AgreementTypeDto } from './AgreementTypeDto';
export type ApiResponseOfAgreementTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | AgreementTypeDto);
};
