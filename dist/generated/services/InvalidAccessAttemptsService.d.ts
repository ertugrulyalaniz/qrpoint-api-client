import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfInvalidAccessAttemptDto } from '../models/ApiResponseOfInvalidAccessAttemptDto';
import type { ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto } from '../models/ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InvalidAccessAttemptsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsCreate(requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsUpdate(requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsBatch(requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsBulk(requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiInvalidAccessAttemptsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
}
