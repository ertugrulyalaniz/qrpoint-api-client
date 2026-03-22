import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfMailOutboxStatusDto } from '../models/ApiResponseOfMailOutboxStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataMailOutboxStatusService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMailOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataMailOutboxStatusGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfMailOutboxStatusDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMailOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataMailOutboxStatusGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfMailOutboxStatusDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfMailOutboxStatusDto OK
     * @throws ApiError
     */
    static postApiDataMailOutboxStatusGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfMailOutboxStatusDto>;
}
