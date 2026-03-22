import type { ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfFavoritePlaceDto } from '../models/ApiResponseOfFavoritePlaceDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfFavoritePlaceDto } from '../models/ApiResponseOfIReadOnlyListOfFavoritePlaceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FavoritePlacesService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesCreate(requestBody: ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesUpdate(requestBody: ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiFavoritePlacesDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiFavoritePlacesCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesBatch(requestBody: ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesBulk(requestBody: ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiFavoritePlacesGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
}
