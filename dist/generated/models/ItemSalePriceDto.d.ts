export type ItemSalePriceDto = {
    itemSalePriceId?: number | string;
    organizationId?: number | string;
    itemId?: number | string;
    currencyCode?: string;
    unitPrice?: number | string;
    vatRate?: number | string;
    isTaxIncluded?: boolean;
    startDate?: string;
    endDate?: string | null;
    isDefault?: boolean;
    priority?: number | string;
    isEnabled?: boolean;
    description?: string | null;
};
