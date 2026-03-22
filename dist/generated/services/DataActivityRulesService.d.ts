import type { ApiCommandRequestOfActivityRuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityRuleDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityRuleDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityRuleDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityRuleDto } from '../models/ApiResponseOfActivityRuleDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityRuleDto } from '../models/ApiResponseOfIReadOnlyListOfActivityRuleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityRulesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityRuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityRuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityRulesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityRuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityRuleDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityRuleDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityRuleDto OK
     * @throws ApiError
     */
    static postApiDataActivityRulesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityRuleDto>;
}
