import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto';
import type { ApiResponseOfPointPlaceAssignmentDto } from '../models/ApiResponseOfPointPlaceAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PointPlaceAssignmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsCreate(requestBody: ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsUpdate(requestBody: ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsBatch(requestBody: ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsBulk(requestBody: ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiPointPlaceAssignmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
}
