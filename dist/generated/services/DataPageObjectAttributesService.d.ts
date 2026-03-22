import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectAttributeDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectAttributeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectAttributeDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectAttributeDto';
import type { ApiResponseOfPageObjectAttributeDto } from '../models/ApiResponseOfPageObjectAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageObjectAttributesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesCreate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesUpdate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectAttributesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectAttributeDto>;
}
