import type { ApiCommandRequestOfAssetActivityTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAssetActivityTypeDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAssetActivityTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAssetActivityTypeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAssetActivityTypeDto } from '../models/ApiResponseOfAssetActivityTypeDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAssetActivityTypeDto } from '../models/ApiResponseOfIReadOnlyListOfAssetActivityTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataAssetActivityTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAssetActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAssetActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAssetActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAssetActivityTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssetActivityTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssetActivityTypeDto OK
     * @throws ApiError
     */
    static postApiDataAssetActivityTypesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssetActivityTypeDto>;
}
