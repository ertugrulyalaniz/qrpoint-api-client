import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemCategoryAssetTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemCategoryAssetTypeDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemCategoryAssetTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemCategoryAssetTypeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto } from '../models/ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto';
import type { ApiResponseOfItemCategoryAssetTypeDto } from '../models/ApiResponseOfItemCategoryAssetTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemCategoryAssetTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryassettypesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryAssetTypeDto>;
}
