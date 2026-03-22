import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfInvalidAccessAttemptDto } from '../models/ApiResponseOfInvalidAccessAttemptDto';
import type { ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto } from '../models/ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataInvalidAccessAttemptsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfInvalidAccessAttemptDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfInvalidAccessAttemptDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfInvalidAccessAttemptDto OK
     * @throws ApiError
     */
    static postApiDataInvalidAccessAttemptsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfInvalidAccessAttemptDto>;
}
