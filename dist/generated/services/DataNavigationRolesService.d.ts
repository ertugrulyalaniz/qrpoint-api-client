import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfNavigationRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfNavigationRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfNavigationRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfNavigationRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfNavigationRoleDto } from '../models/ApiResponseOfIReadOnlyListOfNavigationRoleDto';
import type { ApiResponseOfNavigationRoleDto } from '../models/ApiResponseOfNavigationRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataNavigationRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfNavigationRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfNavigationRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfNavigationRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfNavigationRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationRoleDto OK
     * @throws ApiError
     */
    static postApiDataNavigationRolesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationRoleDto>;
}
