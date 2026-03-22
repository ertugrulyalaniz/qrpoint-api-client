export type CountryDto = {
    countryId?: number | string;
    countryCode?: string;
    countryName?: string;
    originalName?: string | null;
    iso?: number | string;
    phoneCode?: string | null;
    isEnabled?: boolean;
};
