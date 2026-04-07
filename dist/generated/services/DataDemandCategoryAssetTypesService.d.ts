import type { ApiCommandRequestOfDemandCategoryAssetTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDemandCategoryAssetTypeDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDemandCategoryAssetTypeDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDemandCategoryAssetTypeDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfDemandCategoryAssetTypeDto } from '../models/ApiResponseOfDemandCategoryAssetTypeDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto } from '../models/ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataDemandCategoryAssetTypesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfDemandCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfDemandCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfDemandCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfDemandCategoryAssetTypeDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryAssetTypeDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDemandCategoryAssetTypeDto OK
     * @throws ApiError
     */
    static postApiDataDemandCategoryAssetTypesGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDemandCategoryAssetTypeDto>;
}
