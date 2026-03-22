import type { ApiCommandRequestOfActionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActionDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActionDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActionDto } from '../models/ApiResponseOfActionDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActionDto } from '../models/ApiResponseOfIReadOnlyListOfActionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ActionsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsCreate(requestBody: ApiCommandRequestOfActionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsUpdate(requestBody: ApiCommandRequestOfActionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActionsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiActionsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsBatch(requestBody: ApiCommandRequestOfListOfActionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsBulk(requestBody: ApiCommandRequestOfListOfActionDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfActionDto OK
     * @throws ApiError
     */
    static postApiActionsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfActionDto>;
}
