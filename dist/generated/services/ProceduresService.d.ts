import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfProcedureDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfProcedureDtoAndEmptyOptions';
import type { ApiCommandRequestOfProcedureDtoAndEmptyOptions } from '../models/ApiCommandRequestOfProcedureDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfProcedureDto } from '../models/ApiResponseOfIReadOnlyListOfProcedureDto';
import type { ApiResponseOfProcedureDto } from '../models/ApiResponseOfProcedureDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProceduresService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresCreate(requestBody: ApiCommandRequestOfProcedureDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresUpdate(requestBody: ApiCommandRequestOfProcedureDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiProceduresDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiProceduresCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresBatch(requestBody: ApiCommandRequestOfListOfProcedureDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresBulk(requestBody: ApiCommandRequestOfListOfProcedureDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfProcedureDto OK
     * @throws ApiError
     */
    static postApiProceduresGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfProcedureDto>;
}
