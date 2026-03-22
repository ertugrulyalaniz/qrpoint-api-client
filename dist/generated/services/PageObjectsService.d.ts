import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectDto';
import type { ApiResponseOfPageObjectDto } from '../models/ApiResponseOfPageObjectDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PageObjectsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsCreate(requestBody: ApiCommandRequestOfPageObjectDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsUpdate(requestBody: ApiCommandRequestOfPageObjectDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageObjectsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiPageObjectsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsBatch(requestBody: ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsBulk(requestBody: ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiPageObjectsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
}
