import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfNavigationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfNavigationDtoAndEmptyOptions';
import type { ApiCommandRequestOfNavigationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfNavigationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfNavigationDto } from '../models/ApiResponseOfIReadOnlyListOfNavigationDto';
import type { ApiResponseOfNavigationDto } from '../models/ApiResponseOfNavigationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataNavigationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsCreate(xClientId: string, requestBody: ApiCommandRequestOfNavigationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsUpdate(xClientId: string, requestBody: ApiCommandRequestOfNavigationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataNavigationsDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfNavigationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfNavigationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNavigationDto OK
     * @throws ApiError
     */
    static postApiDataNavigationsGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNavigationDto>;
}
