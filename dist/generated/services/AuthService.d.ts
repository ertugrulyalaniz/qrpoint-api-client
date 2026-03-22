import type { ApiResponseOfEmptyData } from '../models/ApiResponseOfEmptyData';
import type { CheckUserAccountApiRequest } from '../models/CheckUserAccountApiRequest';
import type { LoginApiRequest } from '../models/LoginApiRequest';
import type { LoginApiResponse } from '../models/LoginApiResponse';
import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { RefreshTokenApiResponse } from '../models/RefreshTokenApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AuthService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    static postApiAuthLoginPinRequest(xClientId: string, requestBody: LoginPinRequestApiRequest, acceptLanguage?: string): CancelablePromise<ApiResponseOfEmptyData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns LoginApiResponse OK
     * @throws ApiError
     */
    static postApiAuthLogin(xClientId: string, requestBody: LoginApiRequest, acceptLanguage?: string): CancelablePromise<LoginApiResponse>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    static postApiAuthLogout(xClientId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfEmptyData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns RefreshTokenApiResponse OK
     * @throws ApiError
     */
    static postApiAuthRefreshToken(xClientId: string, acceptLanguage?: string): CancelablePromise<RefreshTokenApiResponse>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    static postApiAuthCheckToken(xClientId: string, acceptLanguage?: string): CancelablePromise<ApiResponseOfEmptyData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    static postApiAuthCheckUserAccount(xClientId: string, requestBody: CheckUserAccountApiRequest, acceptLanguage?: string): CancelablePromise<ApiResponseOfEmptyData>;
}
