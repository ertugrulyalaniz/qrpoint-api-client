import type { AddressTypeDto } from './AddressTypeDto';
export type ApiResponseOfAddressTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | AddressTypeDto);
};
