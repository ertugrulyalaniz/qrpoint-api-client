import type { ApiCommandRequestOfActivityTypeRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityTypeRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityTypeRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityTypeRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityTypeRoleAssignmentDto } from '../models/ApiResponseOfActivityTypeRoleAssignmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActivityTypeRoleAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsCreate(requestBody: ApiCommandRequestOfActivityTypeRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsUpdate(requestBody: ApiCommandRequestOfActivityTypeRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsBatch(requestBody: ApiCommandRequestOfListOfActivityTypeRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsBulk(requestBody: ApiCommandRequestOfListOfActivityTypeRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityTypeRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityTypeRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiActivityTypeRoleAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityTypeRoleAssignmentDto>;
}
