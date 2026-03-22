import type { ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfFavoritePlaceDto } from '../models/ApiResponseOfFavoritePlaceDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfFavoritePlaceDto } from '../models/ApiResponseOfIReadOnlyListOfFavoritePlaceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataFavoritePlacesService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesCreate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesUpdate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfFavoritePlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesDelete(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesBatch(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesBulk(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfFavoritePlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesGetbyid(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesGetall(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoritePlaceDto OK
     * @throws ApiError
     */
    static postApiDataFavoritePlacesGetpaged(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoritePlaceDto>;
}
