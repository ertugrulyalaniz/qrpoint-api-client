import type { ApiResponseOfGetAllMobileDataResult } from '../models/ApiResponseOfGetAllMobileDataResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BffMobileDataService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileDataResult OK
     * @throws ApiError
     */
    static postApiBffWebDataGetall(xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetAllMobileDataResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileDataResult OK
     * @throws ApiError
     */
    static postApiBffMobileDataGetall(xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetAllMobileDataResult>;
}
