import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfJobPositionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfJobPositionDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfJobPositionDto } from '../models/ApiResponseOfIReadOnlyListOfJobPositionDto';
import type { ApiResponseOfJobPositionDto } from '../models/ApiResponseOfJobPositionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class JobPositionsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsCreate(requestBody: ApiCommandRequestOfJobPositionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsUpdate(requestBody: ApiCommandRequestOfJobPositionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiJobPositionsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiJobPositionsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsBatch(requestBody: ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsBulk(requestBody: ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiJobPositionsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
}
