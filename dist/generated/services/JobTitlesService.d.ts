import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfJobTitleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfJobTitleDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfJobTitleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfJobTitleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfJobTitleDto } from '../models/ApiResponseOfIReadOnlyListOfJobTitleDto';
import type { ApiResponseOfJobTitleDto } from '../models/ApiResponseOfJobTitleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class JobTitlesService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesCreate(requestBody: ApiCommandRequestOfJobTitleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesUpdate(requestBody: ApiCommandRequestOfJobTitleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiJobTitlesDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiJobTitlesCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesBatch(requestBody: ApiCommandRequestOfListOfJobTitleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesBulk(requestBody: ApiCommandRequestOfListOfJobTitleDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobTitleDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobTitleDto OK
     * @throws ApiError
     */
    static postApiJobTitlesGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobTitleDto>;
}
