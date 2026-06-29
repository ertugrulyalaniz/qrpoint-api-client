import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemOrderDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemOrderDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemOrderDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemOrderDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemOrderDto } from '../models/ApiResponseOfIReadOnlyListOfItemOrderDto';
import type { ApiResponseOfItemOrderDto } from '../models/ApiResponseOfItemOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemOrdersService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemOrderDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemOrderDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemordersDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemOrderDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemOrderDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemOrderDto OK
     * @throws ApiError
     */
    static postApiDataItemordersGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemOrderDto>;
}
