import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfLicencedModuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfLicencedModuleDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfLicencedModuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfLicencedModuleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfLicencedModuleDto } from '../models/ApiResponseOfIReadOnlyListOfLicencedModuleDto';
import type { ApiResponseOfLicencedModuleDto } from '../models/ApiResponseOfLicencedModuleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataLicencedModulesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfLicencedModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfLicencedModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfLicencedModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfLicencedModuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicencedModuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfLicencedModuleDto OK
     * @throws ApiError
     */
    static postApiDataLicencedModulesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfLicencedModuleDto>;
}
