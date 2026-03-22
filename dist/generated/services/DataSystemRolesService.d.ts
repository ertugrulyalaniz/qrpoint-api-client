import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfSystemRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfSystemRoleDto } from '../models/ApiResponseOfIReadOnlyListOfSystemRoleDto';
import type { ApiResponseOfSystemRoleDto } from '../models/ApiResponseOfSystemRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataSystemRolesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesCreate(xClientId: string, requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesUpdate(xClientId: string, requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataSystemRolesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiDataSystemRolesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
}
