import type { ApiCommandRequestOfEmptyDataAndEmptyOptions } from '../models/ApiCommandRequestOfEmptyDataAndEmptyOptions';
import type { ApiResponseOfGetCurrentActivitiesResult } from '../models/ApiResponseOfGetCurrentActivitiesResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ReportsActivitiesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfGetCurrentActivitiesResult OK
     * @throws ApiError
     */
    static postApiReportsActivitiesGetCurrentActivities(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfEmptyDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfGetCurrentActivitiesResult>;
}
