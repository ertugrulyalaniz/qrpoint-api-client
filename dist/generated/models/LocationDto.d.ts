export type LocationDto = {
    locationId?: number | string;
    locationName?: string;
    locationTypeId?: number | string;
    organizationId?: number | string;
    parentId?: number | string | null;
    addressId?: number | string | null;
    isEnabled?: boolean;
    description?: string | null;
};
