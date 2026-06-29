export type ItemOrderLineDto = {
    itemOrderLineId?: number | string;
    organizationId?: number | string;
    itemOrderId?: number | string;
    itemId?: number | string;
    itemName?: string;
    quantity?: number | string;
    unitPrice?: number | string;
    discountAmount?: number | string;
    taxAmount?: number | string;
    lineTotal?: number | string;
    note?: string | null;
    isEnabled?: boolean;
};
