import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPointAllocationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPointAllocationDtoAndEmptyOptions';
import type { ApiCommandRequestOfPointAllocationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPointAllocationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPointAllocationDto } from '../models/ApiResponseOfIReadOnlyListOfPointAllocationDto';
import type { ApiResponseOfPointAllocationDto } from '../models/ApiResponseOfPointAllocationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPointAllocationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointAllocationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointAllocationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointAllocationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointAllocationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAllocationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAllocationDto OK
     * @throws ApiError
     */
    static postApiDataPointAllocationsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAllocationDto>;
}
