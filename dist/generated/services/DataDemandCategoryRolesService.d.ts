import type { ApiCommandRequestOfDemandCategoryRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDemandCategoryRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDemandCategoryRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDemandCategoryRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfDemandCategoryRoleDto } from '../models/ApiResponseOfDemandCategoryRoleDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto } from '../models/ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataDemandCategoryRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfDemandCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfDemandCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfDemandCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfDemandCategoryRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryRoleDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryRolesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryRoleDto>;
}
