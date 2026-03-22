import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationDto';
import type { ApiResponseOfOrganizationDto } from '../models/ApiResponseOfOrganizationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataOrganizationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataOrganizationsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiDataOrganizationsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
}
