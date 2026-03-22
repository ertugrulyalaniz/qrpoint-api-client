import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class HomeService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMHomeGetall(requestBody: LoginPinRequestApiRequest, xDeviceId?: string): CancelablePromise<string>;
}
