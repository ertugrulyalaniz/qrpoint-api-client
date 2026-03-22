import type { ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityProcedureStepDto } from '../models/ApiResponseOfActivityProcedureStepDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityProcedureStepDto } from '../models/ApiResponseOfIReadOnlyListOfActivityProcedureStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityProcedureStepsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataActivityProcedureStepsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityProcedureStepDto>;
}
