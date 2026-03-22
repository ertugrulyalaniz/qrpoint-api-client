import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfModuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfModuleDtoAndEmptyOptions';
import type { ApiCommandRequestOfModuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfModuleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfModuleDto } from '../models/ApiResponseOfIReadOnlyListOfModuleDto';
import type { ApiResponseOfModuleDto } from '../models/ApiResponseOfModuleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataModulesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesCreate(xClientId: string, requestBody: ApiCommandRequestOfModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesUpdate(xClientId: string, requestBody: ApiCommandRequestOfModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataModulesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfModuleDto OK
     * @throws ApiError
     */
    static postApiDataModulesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfModuleDto>;
}
