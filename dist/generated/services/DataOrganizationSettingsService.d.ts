import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationSettingDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationSettingDto';
import type { ApiResponseOfOrganizationSettingDto } from '../models/ApiResponseOfOrganizationSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataOrganizationSettingsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationSettingsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
}
