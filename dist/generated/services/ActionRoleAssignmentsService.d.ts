import type { ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActionRoleAssignmentDto } from '../models/ApiResponseOfActionRoleAssignmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActionRoleAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsCreate(requestBody: ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsUpdate(requestBody: ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsBatch(requestBody: ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsBulk(requestBody: ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActionRoleAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
}
