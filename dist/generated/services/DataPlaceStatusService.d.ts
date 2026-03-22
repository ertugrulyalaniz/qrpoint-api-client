import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfPlaceStatusDto } from '../models/ApiResponseOfPlaceStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPlaceStatusService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetbyid(xDeviceId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceStatusDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetall(xDeviceId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceStatusDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPlaceStatusDto OK
     * @throws ApiError
     */
    static postApiDataPlaceStatusGetpaged(xDeviceId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPlaceStatusDto>;
}
