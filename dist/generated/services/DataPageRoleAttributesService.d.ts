import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageRoleAttributeDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageRoleAttributeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageRoleAttributeDto } from '../models/ApiResponseOfIReadOnlyListOfPageRoleAttributeDto';
import type { ApiResponseOfPageRoleAttributeDto } from '../models/ApiResponseOfPageRoleAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageRoleAttributesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesCreate(xClientId: string, requestBody: ApiCommandRequestOfPageRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesUpdate(xClientId: string, requestBody: ApiCommandRequestOfPageRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPageRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPageRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageRoleAttributesGetpageroled(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageRoleAttributeDto>;
}
