import type { ApiCommandRequestOfAssignPointOpsData } from '../models/ApiCommandRequestOfAssignPointOpsData';
import type { ApiCommandRequestOfGeneratePointOpsData } from '../models/ApiCommandRequestOfGeneratePointOpsData';
import type { ApiCommandRequestOfUnassignPointOpsData } from '../models/ApiCommandRequestOfUnassignPointOpsData';
import type { ApiResponseOfAssignPointOpsResult } from '../models/ApiResponseOfAssignPointOpsResult';
import type { ApiResponseOfGeneratePointsOpsResult } from '../models/ApiResponseOfGeneratePointsOpsResult';
import type { ApiResponseOfUnassignPointOpsResult } from '../models/ApiResponseOfUnassignPointOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsPointService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAssignPointOpsResult OK
     * @throws ApiError
     */
    static postApiOpsPointAssign(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAssignPointOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfAssignPointOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUnassignPointOpsResult OK
     * @throws ApiError
     */
    static postApiOpsPointUnassign(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUnassignPointOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUnassignPointOpsResult>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGeneratePointsOpsResult OK
     * @throws ApiError
     */
    static postApiOpsPointGenerate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfGeneratePointOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfGeneratePointsOpsResult>;
}
