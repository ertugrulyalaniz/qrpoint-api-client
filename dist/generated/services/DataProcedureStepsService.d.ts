import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions';
import type { ApiCommandRequestOfProcedureStepDtoAndEmptyOptions } from '../models/ApiCommandRequestOfProcedureStepDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfProcedureStepDto } from '../models/ApiResponseOfIReadOnlyListOfProcedureStepDto';
import type { ApiResponseOfProcedureStepDto } from '../models/ApiResponseOfProcedureStepDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataProcedureStepsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfProcedureStepDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfProcedureStepDto OK
     * @throws ApiError
     */
    static postApiDataProcedureStepsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfProcedureStepDto>;
}
