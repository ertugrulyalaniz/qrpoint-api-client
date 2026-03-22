import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPlaceDtoAndEmptyOptions';
import type { ApiCommandRequestOfPlaceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPlaceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPlaceDto } from '../models/ApiResponseOfIReadOnlyListOfPlaceDto';
import type { ApiResponseOfPlaceDto } from '../models/ApiResponseOfPlaceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPlacesService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesCreate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfPlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesUpdate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfPlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPlacesDelete(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesBatch(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesBulk(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPlaceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesGetbyid(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesGetall(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceDto OK
     * @throws ApiError
     */
    static postApiDataPlacesGetpaged(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceDto>;
}
