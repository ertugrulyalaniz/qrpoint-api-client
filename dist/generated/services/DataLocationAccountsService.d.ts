import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfLocationAccountDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfLocationAccountDtoAndEmptyOptions';
import type { ApiCommandRequestOfLocationAccountDtoAndEmptyOptions } from '../models/ApiCommandRequestOfLocationAccountDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfLocationAccountDto } from '../models/ApiResponseOfIReadOnlyListOfLocationAccountDto';
import type { ApiResponseOfLocationAccountDto } from '../models/ApiResponseOfLocationAccountDto';
import type { ApiResponseOfPagedResultOfLocationAccountDto } from '../models/ApiResponseOfPagedResultOfLocationAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataLocationAccountsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfLocationAccountDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfLocationAccountDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfLocationAccountDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfLocationAccountDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLocationAccountDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPagedResultOfLocationAccountDto OK
     * @throws ApiError
     */
    static postApiDataLocationAccountsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPagedResultOfLocationAccountDto>;
}
