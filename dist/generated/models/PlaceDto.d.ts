export type PlaceDto = {
    placeId: number | string;
    placeName: string;
    placeTypeId: number | string;
    organizationId: number | string;
    locationId: number | string | null;
    floor: string | null;
    statusId: number | string;
    isEnabled: boolean;
    description: string | null;
};
