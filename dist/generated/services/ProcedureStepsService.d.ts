import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfProcedureStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfProcedureStepDto } from '../models/ApiResponseOfIReadOnlyListOfProcedureStepDto';
import type { ApiResponseOfProcedureStepDto } from '../models/ApiResponseOfProcedureStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProcedureStepsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsCreate(requestBody: ApiCommandRequestOfProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsUpdate(requestBody: ApiCommandRequestOfProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiProcedureStepsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiProcedureStepsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsBatch(requestBody: ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsBulk(requestBody: ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiProcedureStepsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
}
