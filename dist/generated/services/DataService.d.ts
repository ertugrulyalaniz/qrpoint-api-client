import type { LoginPinRequestApiRequest } from '../models/LoginPinRequestApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @returns string OK
     * @throws ApiError
     */
    static postApiBffMDataGetall(requestBody: LoginPinRequestApiRequest, xDeviceId?: string): CancelablePromise<string>;
}
