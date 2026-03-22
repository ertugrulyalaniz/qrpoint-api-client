import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectRoleDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectRoleDto';
import type { ApiResponseOfPageObjectRoleDto } from '../models/ApiResponseOfPageObjectRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageObjectRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageObjectRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageObjectRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleSGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleDto>;
}
