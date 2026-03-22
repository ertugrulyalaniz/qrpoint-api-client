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
    static postApiDataUserSystemRoleSCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleSGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleDto>;
}
