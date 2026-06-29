import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemCategoryDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemCategoryDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemCategoryDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemCategoryDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemCategoryDto } from '../models/ApiResponseOfIReadOnlyListOfItemCategoryDto';
import type { ApiResponseOfItemCategoryDto } from '../models/ApiResponseOfItemCategoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemCategoriesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoriesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryDto>;
}
