import type { ApiResponseOfGetAllMobileNotificationsResult } from '../models/ApiResponseOfGetAllMobileNotificationsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BffMobileNotificationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetAllMobileNotificationsResult OK
     * @throws ApiError
     */
    static postApiBffMobileNotificationsGetall(xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetAllMobileNotificationsResult>;
}
