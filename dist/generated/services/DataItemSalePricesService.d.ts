import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemSalePriceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemSalePriceDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemSalePriceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemSalePriceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemSalePriceDto } from '../models/ApiResponseOfIReadOnlyListOfItemSalePriceDto';
import type { ApiResponseOfItemSalePriceDto } from '../models/ApiResponseOfItemSalePriceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemSalePricesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemSalePriceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemSalePriceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemSalePriceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemSalePriceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemSalePriceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemSalePriceDto OK
     * @throws ApiError
     */
    static postApiDataItemsalepricesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemSalePriceDto>;
}
