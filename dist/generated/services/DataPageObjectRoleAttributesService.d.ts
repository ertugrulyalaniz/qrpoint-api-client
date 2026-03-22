import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto';
import type { ApiResponseOfPageObjectRoleAttributeDto } from '../models/ApiResponseOfPageObjectRoleAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageObjectRoleAttributesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesCreate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesUpdate(xClientId: string, requestBody: ApiCommandRequestOfPageObjectRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleAttributeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAttributeDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAttributesGetpageobjectroled(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAttributeDto>;
}
