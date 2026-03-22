import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfLicenceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfLicenceDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfLicenceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfLicenceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfLicenceDto } from '../models/ApiResponseOfIReadOnlyListOfLicenceDto';
import type { ApiResponseOfLicenceDto } from '../models/ApiResponseOfLicenceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataLicencesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesCreate(xClientId: string, requestBody: ApiCommandRequestOfLicenceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesUpdate(xClientId: string, requestBody: ApiCommandRequestOfLicenceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataLicencesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfLicenceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfLicenceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicenceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicenceDto OK
     * @throws ApiError
     */
    static postApiDataLicencesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicenceDto>;
}
