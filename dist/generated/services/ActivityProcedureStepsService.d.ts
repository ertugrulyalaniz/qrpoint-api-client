import type { ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityProcedureStepDto } from '../models/ApiResponseOfActivityProcedureStepDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityProcedureStepDto } from '../models/ApiResponseOfIReadOnlyListOfActivityProcedureStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActivityProcedureStepsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsCreate(requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsUpdate(requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsBatch(requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsBulk(requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
}
