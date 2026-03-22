import type { ApiCommandRequestOfCompleteWorkOpsData } from '../models/ApiCommandRequestOfCompleteWorkOpsData';
import type { ApiCommandRequestOfStartWorkOpsData } from '../models/ApiCommandRequestOfStartWorkOpsData';
import type { ApiResponseOfCompleteWorkOpsResult } from '../models/ApiResponseOfCompleteWorkOpsResult';
import type { ApiResponseOfStartWorkOpsResult } from '../models/ApiResponseOfStartWorkOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsShiftService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfStartWorkOpsResult OK
     * @throws ApiError
     */
    static postApiOpsShiftStart(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfStartWorkOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfStartWorkOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCompleteWorkOpsResult OK
     * @throws ApiError
     */
    static postApiOpsShiftComplete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCompleteWorkOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfCompleteWorkOpsResult>;
}
