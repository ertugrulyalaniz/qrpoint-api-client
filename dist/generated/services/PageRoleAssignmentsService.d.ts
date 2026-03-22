import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto';
import type { ApiResponseOfPageRoleAssignmentDto } from '../models/ApiResponseOfPageRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PageRoleAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsCreate(requestBody: ApiCommandRequestOfPageRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsUpdate(requestBody: ApiCommandRequestOfPageRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsBatch(requestBody: ApiCommandRequestOfListOfPageRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsBulk(requestBody: ApiCommandRequestOfListOfPageRoleAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageRoleAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiPageRoleAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageRoleAssignmentDto>;
}
