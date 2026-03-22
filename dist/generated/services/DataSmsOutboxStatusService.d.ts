import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfSmsOutboxStatusDto } from '../models/ApiResponseOfSmsOutboxStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataSmsOutboxStatusService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSmsOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataSmsOutboxStatusGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfSmsOutboxStatusDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSmsOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataSmsOutboxStatusGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSmsOutboxStatusDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfSmsOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataSmsOutboxStatusGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfSmsOutboxStatusDto>;
}
