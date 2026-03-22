import type { ApiCommandRequestOfIdData } from '../models/ApiCommandRequestOfIdData';
import type { ApiResponseOfRegisterDeviceOpsResult } from '../models/ApiResponseOfRegisterDeviceOpsResult';
import type { ApiResponseOfUnregisterDeviceOpsResult } from '../models/ApiResponseOfUnregisterDeviceOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsDeviceService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfRegisterDeviceOpsResult OK
     * @throws ApiError
     */
    static postApiOpsDeviceRegister(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfRegisterDeviceOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUnregisterDeviceOpsResult OK
     * @throws ApiError
     */
    static postApiOpsDeviceUnregister(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUnregisterDeviceOpsResult>;
}
