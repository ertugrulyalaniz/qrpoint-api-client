import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityOccurrenceTypeDto } from '../models/ApiResponseOfActivityOccurrenceTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityOccurrenceTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityOccurrenceTypesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityOccurrenceTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityOccurrenceTypesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityOccurrenceTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityOccurrenceTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityOccurrenceTypesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityOccurrenceTypeDto>;
}
