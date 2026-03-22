import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProfileService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMProfileGetall(requestBody: LoginPinRequestApiRequest, xDeviceId?: string): CancelablePromise<string>;
}
