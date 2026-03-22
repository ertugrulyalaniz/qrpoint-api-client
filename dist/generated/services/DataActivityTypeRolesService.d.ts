import type { ApiCommandRequestOfActivityTypeRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityTypeRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityTypeRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityTypeRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityTypeRoleDto } from '../models/ApiResponseOfActivityTypeRoleDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityTypeRoleDto } from '../models/ApiResponseOfIReadOnlyListOfActivityTypeRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityTypeRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityTypeRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityTypeRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityTypeRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityTypeRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeRoleDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypeRoleSGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeRoleDto>;
}
