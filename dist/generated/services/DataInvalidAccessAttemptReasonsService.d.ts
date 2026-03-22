import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfInvalidAccessAttemptReasonDto } from '../models/ApiResponseOfInvalidAccessAttemptReasonDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataInvalidAccessAttemptReasonsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptReasonsGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptReasonsGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptReasonDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptReasonsGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptReasonDto>;
}
