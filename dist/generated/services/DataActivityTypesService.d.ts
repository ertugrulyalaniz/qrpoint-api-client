import type { ApiCommandRequestOfActivityTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActivityTypeDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActivityTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActivityTypeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActivityTypeDto } from '../models/ApiResponseOfActivityTypeDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActivityTypeDto } from '../models/ApiResponseOfIReadOnlyListOfActivityTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActivityTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActivityTypesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataActivityTypesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActivityTypeDto>;
}
