import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemCartLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemCartLineDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemCartLineDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemCartLineDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemCartLineDto } from '../models/ApiResponseOfIReadOnlyListOfItemCartLineDto';
import type { ApiResponseOfItemCartLineDto } from '../models/ApiResponseOfItemCartLineDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemCartLinesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCartLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCartLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCartLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCartLineDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCartLineDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCartLineDto OK
     * @throws ApiError
     */
    static postApiDataItemcartlinesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCartLineDto>;
}
