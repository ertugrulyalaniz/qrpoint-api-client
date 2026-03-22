import type { ApiCommandRequestOfCodeData } from '../models/ApiCommandRequestOfCodeData';
import type { ApiResponseOfScanOpsResultDto } from '../models/ApiResponseOfScanOpsResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OpsScanService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfScanOpsResultDto OK
     * @throws ApiError
     */
    static postApiOpsScanQrcode(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfCodeData, acceptLanguage?: string): CancelablePromise<ApiResponseOfScanOpsResultDto>;
}
