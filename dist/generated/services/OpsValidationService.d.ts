import type { ApiCommandRequestOfCheckOpsData } from '../models/ApiCommandRequestOfCheckOpsData';
import type { ApiCommandRequestOfConfirmOpsData } from '../models/ApiCommandRequestOfConfirmOpsData';
import type { ApiResponseOfCheckOpsResult } from '../models/ApiResponseOfCheckOpsResult';
import type { ApiResponseOfConfirmOpsResult } from '../models/ApiResponseOfConfirmOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsValidationService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCheckOpsResult OK
     * @throws ApiError
     */
    static postApiOpsValidationCheck(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCheckOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfCheckOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfConfirmOpsResult OK
     * @throws ApiError
     */
    static postApiOpsValidationConfirm(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfConfirmOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfConfirmOpsResult>;
}
