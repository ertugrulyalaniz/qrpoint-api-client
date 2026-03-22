import type { ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityFeedbackDto } from '../models/ApiResponseOfActivityFeedbackDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityFeedbackDto } from '../models/ApiResponseOfIReadOnlyListOfActivityFeedbackDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActivityFeedbacksService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksCreate(requestBody: ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksUpdate(requestBody: ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksBatch(requestBody: ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksBulk(requestBody: ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiActivityFeedbacksGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
}
