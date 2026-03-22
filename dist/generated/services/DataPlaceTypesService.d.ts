import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfPlaceTypeDto } from '../models/ApiResponseOfPlaceTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPlaceTypesService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetbyid(xDeviceId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceTypeDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetall(xDeviceId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceTypeDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceTypeDto OK
     * @throws ApiError
     */
    static postApiDataPlaceTypesGetpaged(xDeviceId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceTypeDto>;
}
