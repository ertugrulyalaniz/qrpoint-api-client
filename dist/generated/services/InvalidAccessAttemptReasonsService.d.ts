import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfInvalidAccessAttemptReasonDtoAndEmptyOptions } from '../models/ApiCommandRequestOfInvalidAccessAttemptReasonDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfInvalidAccessAttemptReasonDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfInvalidAccessAttemptReasonDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfInvalidAccessAttemptReasonDto } from '../models/ApiResponseOfInvalidAccessAttemptReasonDto';
import type { ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto } from '../models/ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InvalidAccessAttemptReasonsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsCreate(requestBody: ApiCommandRequestOfInvalidAccessAttemptReasonDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsUpdate(requestBody: ApiCommandRequestOfInvalidAccessAttemptReasonDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsBatch(requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptReasonDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsBulk(requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptReasonDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptReasonsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
}
