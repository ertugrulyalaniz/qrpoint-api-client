import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto';
import type { ApiResponseOfPageObjectRoleAssignmentDto } from '../models/ApiResponseOfPageObjectRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PageObjectRoleAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsCreate(requestBody: ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsUpdate(requestBody: ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsBatch(requestBody: ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsBulk(requestBody: ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageObjectRoleAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
}
