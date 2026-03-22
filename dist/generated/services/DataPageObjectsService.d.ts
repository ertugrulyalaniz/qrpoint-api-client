import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectDto';
import type { ApiResponseOfPageObjectDto } from '../models/ApiResponseOfPageObjectDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageObjectsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsCreate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsUpdate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageObjectsDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectsGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectDto>;
}
