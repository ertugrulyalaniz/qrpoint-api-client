import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityProcedureStepStatusDto } from '../models/ApiResponseOfActivityProcedureStepStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActivityProcedureStepStatusesService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepStatusDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepStatusGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepStatusDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepStatusDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepStatusGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepStatusDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActivityProcedureStepStatusDto OK
     * @throws ApiError
     */
    static postApiActivityProcedureStepStatusGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActivityProcedureStepStatusDto>;
}
