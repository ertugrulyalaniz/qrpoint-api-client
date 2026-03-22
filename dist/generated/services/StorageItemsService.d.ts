import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfStorageItemDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfStorageItemDtoAndEmptyOptions';
import type { ApiCommandRequestOfStorageItemDtoAndEmptyOptions } from '../models/ApiCommandRequestOfStorageItemDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfStorageItemDto } from '../models/ApiResponseOfIReadOnlyListOfStorageItemDto';
import type { ApiResponseOfStorageItemDto } from '../models/ApiResponseOfStorageItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class StorageItemsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsCreate(requestBody: ApiCommandRequestOfStorageItemDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsUpdate(requestBody: ApiCommandRequestOfStorageItemDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiStorageItemsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiStorageItemsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsBatch(requestBody: ApiCommandRequestOfListOfStorageItemDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsBulk(requestBody: ApiCommandRequestOfListOfStorageItemDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfStorageItemDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfStorageItemDto OK
     * @throws ApiError
     */
    static postApiStorageItemsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfStorageItemDto>;
}
