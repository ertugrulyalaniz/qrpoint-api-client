import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserSystemRoleDto } from '../models/ApiResponseOfIReadOnlyListOfUserSystemRoleDto';
import type { ApiResponseOfUserSystemRoleDto } from '../models/ApiResponseOfUserSystemRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataUserSystemRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRolesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
}
