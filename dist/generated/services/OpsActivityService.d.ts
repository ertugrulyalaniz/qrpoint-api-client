import type { ApiCommandRequestOfCancelActivityOpsData } from '../models/ApiCommandRequestOfCancelActivityOpsData';
import type { ApiCommandRequestOfCompleteActivityOpsData } from '../models/ApiCommandRequestOfCompleteActivityOpsData';
import type { ApiCommandRequestOfCreateActivityOpsData } from '../models/ApiCommandRequestOfCreateActivityOpsData';
import type { ApiCommandRequestOfStartActivityOpsData } from '../models/ApiCommandRequestOfStartActivityOpsData';
import type { ApiResponseOfCancelActivityOpsResult } from '../models/ApiResponseOfCancelActivityOpsResult';
import type { ApiResponseOfCompleteActivityOpsResult } from '../models/ApiResponseOfCompleteActivityOpsResult';
import type { ApiResponseOfCreateActivityOpsResult } from '../models/ApiResponseOfCreateActivityOpsResult';
import type { ApiResponseOfStartActivityOpsResult } from '../models/ApiResponseOfStartActivityOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsActivityService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCreateActivityOpsResult OK
     * @throws ApiError
     */
    static postApiOpsActivityCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCreateActivityOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfCreateActivityOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfStartActivityOpsResult OK
     * @throws ApiError
     */
    static postApiOpsActivityStart(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfStartActivityOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfStartActivityOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCompleteActivityOpsResult OK
     * @throws ApiError
     */
    static postApiOpsActivityComplete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCompleteActivityOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfCompleteActivityOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfCancelActivityOpsResult OK
     * @throws ApiError
     */
    static postApiOpsActivityCancel(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCancelActivityOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfCancelActivityOpsResult>;
}
