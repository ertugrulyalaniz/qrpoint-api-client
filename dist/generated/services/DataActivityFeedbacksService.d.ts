import type { ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityFeedbackDto } from '../models/ApiResponseOfActivityFeedbackDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityFeedbackDto } from '../models/ApiResponseOfIReadOnlyListOfActivityFeedbackDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityFeedbacksService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityFeedbackDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityFeedbackDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityFeedbackDto OK
     * @throws ApiError
     */
    static postApiDataActivityFeedbacksGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityFeedbackDto>;
}
