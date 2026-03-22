import type { ApiCommandRequestOfFavoriteAssetDtoAndEmptyOptions } from '../models/ApiCommandRequestOfFavoriteAssetDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfFavoriteAssetDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfFavoriteAssetDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfFavoriteAssetDto } from '../models/ApiResponseOfFavoriteAssetDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfFavoriteAssetDto } from '../models/ApiResponseOfIReadOnlyListOfFavoriteAssetDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataFavoriteAssetsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfFavoriteAssetDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfFavoriteAssetDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfFavoriteAssetDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfFavoriteAssetDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoriteAssetDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfFavoriteAssetDto OK
     * @throws ApiError
     */
    static postApiDataFavoriteAssetsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfFavoriteAssetDto>;
}
