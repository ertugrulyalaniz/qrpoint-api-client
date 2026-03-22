import type { ApiCommandRequestOfOverviewOpsData } from '../models/ApiCommandRequestOfOverviewOpsData';
import type { ApiResponseOfOverviewOpsResult } from '../models/ApiResponseOfOverviewOpsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsOverviewService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOverviewOpsResult OK
     * @throws ApiError
     */
    static postApiOpsContextOverview(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfOverviewOpsData, acceptLanguage?: string): CancelablePromise<ApiResponseOfOverviewOpsResult>;
}
