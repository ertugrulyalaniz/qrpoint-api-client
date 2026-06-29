export type ItemCartLineDto = {
    itemCartLineId?: number | string;
    organizationId?: number | string;
    itemCartId?: number | string;
    itemId?: number | string;
    quantity?: number | string;
    unitPrice?: number | string;
    discountAmount?: number | string;
    taxAmount?: number | string;
    lineTotal?: number | string;
    note?: string | null;
    isEnabled?: boolean;
};
