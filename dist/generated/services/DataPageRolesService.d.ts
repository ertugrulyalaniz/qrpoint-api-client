import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageRoleDto } from '../models/ApiResponseOfIReadOnlyListOfPageRoleDto';
import type { ApiResponseOfPageRoleDto } from '../models/ApiResponseOfPageRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageRoleSDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleSGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleDto>;
}
