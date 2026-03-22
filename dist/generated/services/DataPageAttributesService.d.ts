import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageAttributeDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageAttributeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageAttributeDto } from '../models/ApiResponseOfIReadOnlyListOfPageAttributeDto';
import type { ApiResponseOfPageAttributeDto } from '../models/ApiResponseOfPageAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageAttributesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesCreate(xClientId: string, requestBody: ApiCommandRequestOfPageAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesUpdate(xClientId: string, requestBody: ApiCommandRequestOfPageAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageAttributesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPageAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPageAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageAttributesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageAttributeDto>;
}
