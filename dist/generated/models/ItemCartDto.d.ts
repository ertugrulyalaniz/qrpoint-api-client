export type ItemCartDto = {
    itemCartId?: number | string;
    cartNo?: string;
    organizationId?: number | string;
    accountId?: number | string;
    itemCartStatusId?: number | string;
    currencyCode?: string;
    subtotal?: number | string;
    discountTotal?: number | string;
    taxTotal?: number | string;
    grandTotal?: number | string;
    expiresAt?: string | null;
    checkedOutAt?: string | null;
    isEnabled?: boolean;
    description?: string | null;
};
