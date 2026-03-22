import type { AddressDto } from './AddressDto';
export type ApiResponseOfAddressDto = {
    statusCode: number | string;
    message: string;
    data: (null | AddressDto);
};
