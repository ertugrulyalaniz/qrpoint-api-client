import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemOrderLineDto } from '../models/ApiResponseOfIReadOnlyListOfItemOrderLineDto';
import type { ApiResponseOfItemOrderLineDto } from '../models/ApiResponseOfItemOrderLineDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemOrderLinesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemOrderLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemOrderLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderLineDto OK
     * @throws ApiError
     */
    static postApiDataItemorderlinesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderLineDto>;
}
