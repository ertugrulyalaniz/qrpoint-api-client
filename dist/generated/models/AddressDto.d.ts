export type AddressDto = {
    addressId?: number | string;
    organizationId?: number | string;
    addressName?: string;
    addressTypeId?: number | string;
    countryId?: number | string;
    cityId?: number | string;
    districtId?: number | string;
    addressLine?: string;
    isEnabled?: boolean;
    description?: string | null;
};
