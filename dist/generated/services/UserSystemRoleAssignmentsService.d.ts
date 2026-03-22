import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto';
import type { ApiResponseOfUserSystemRoleAssignmentDto } from '../models/ApiResponseOfUserSystemRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UserSystemRoleAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsCreate(requestBody: ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsUpdate(requestBody: ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsBatch(requestBody: ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsBulk(requestBody: ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiUserSystemRoleAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
}
