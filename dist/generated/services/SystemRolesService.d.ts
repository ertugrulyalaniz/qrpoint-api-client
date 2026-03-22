import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions';
import type { ApiCommandRequestOfSystemRoleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfSystemRoleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfSystemRoleDto } from '../models/ApiResponseOfIReadOnlyListOfSystemRoleDto';
import type { ApiResponseOfSystemRoleDto } from '../models/ApiResponseOfSystemRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SystemRolesService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesCreate(requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesUpdate(requestBody: ApiCommandRequestOfSystemRoleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiSystemRolesDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiSystemRolesCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesBatch(requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesBulk(requestBody: ApiCommandRequestOfListOfSystemRoleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfSystemRoleDto OK
     * @throws ApiError
     */
    static postApiSystemRolesGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfSystemRoleDto>;
}
