import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BffMobileHomeService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMobileHomeGetall(xClientId: string, xTenantId: string, requestBody: LoginPinRequestApiRequest, acceptLanguage?: string): CancelablePromise<string>;
}
