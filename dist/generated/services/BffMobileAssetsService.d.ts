import type { ApiResponseOfGetAllMobileAssetsResult } from '../models/ApiResponseOfGetAllMobileAssetsResult';
import type { ApiResponseOfGetAllMobileFavoriteAssetsResult } from '../models/ApiResponseOfGetAllMobileFavoriteAssetsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BffMobileAssetsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileAssetsResult OK
     * @throws ApiError
     */
    static postApiBffMobileAssetsGetall(xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetAllMobileAssetsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileFavoriteAssetsResult OK
     * @throws ApiError
     */
    static postApiBffMobileAssetsGetfavorites(xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetAllMobileFavoriteAssetsResult>;
}
