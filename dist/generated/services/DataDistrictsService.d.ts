import type { ApiCommandRequestOfDistrictDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDistrictDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDistrictDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDistrictDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfDistrictDto } from '../models/ApiResponseOfDistrictDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDistrictDto } from '../models/ApiResponseOfIReadOnlyListOfDistrictDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataDistrictsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsCreate(xClientId: string, requestBody: ApiCommandRequestOfDistrictDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsUpdate(xClientId: string, requestBody: ApiCommandRequestOfDistrictDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataDistrictsDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfDistrictDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfDistrictDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDistrictDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDistrictDto OK
     * @throws ApiError
     */
    static postApiDataDistrictsGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDistrictDto>;
}
