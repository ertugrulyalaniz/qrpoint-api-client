import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPointDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPointDtoAndEmptyOptions';
import type { ApiCommandRequestOfPointDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPointDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPointDto } from '../models/ApiResponseOfIReadOnlyListOfPointDto';
import type { ApiResponseOfPointDto } from '../models/ApiResponseOfPointDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPointsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsCreate(xClientId: string, requestBody: ApiCommandRequestOfPointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsUpdate(xClientId: string, requestBody: ApiCommandRequestOfPointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPointsDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointDto OK
     * @throws ApiError
     */
    static postApiDataPointsGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointDto>;
}
