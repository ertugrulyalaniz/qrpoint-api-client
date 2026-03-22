import type { ApiCommandRequestOfActivityProcedureDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityProcedureDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityProcedureDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityProcedureDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityProcedureDto } from '../models/ApiResponseOfActivityProcedureDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityProcedureDto } from '../models/ApiResponseOfIReadOnlyListOfActivityProcedureDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityProceduresService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityProcedureDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityProcedureDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityProcedureDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityProcedureDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureDto OK
     * @throws ApiError
     */
    static postApiDataActivityProceduresGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureDto>;
}
