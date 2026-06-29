import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfItemCategoryRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfItemCategoryRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfItemCategoryRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfItemCategoryRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfItemCategoryRoleDto } from '../models/ApiResponseOfIReadOnlyListOfItemCategoryRoleDto';
import type { ApiResponseOfItemCategoryRoleDto } from '../models/ApiResponseOfItemCategoryRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataItemCategoryRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfItemCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfItemCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfItemCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataItemcategoryrolesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfItemCategoryRoleDto>;
}
