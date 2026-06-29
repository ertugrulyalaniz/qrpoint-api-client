import type { ApiQueryRequestOfGuidData } from '../models/ApiQueryRequestOfGuidData';
import type { ApiResponseOfEmptyData } from '../models/ApiResponseOfEmptyData';
import type { ApiResponseOfUploadFileResult } from '../models/ApiResponseOfUploadFileResult';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FileStorageService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param formData
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUploadFileResult OK
     * @throws ApiError
     */
    static postApiFileStorageUpload(xClientId: string, xTenantId: string, formData: ({
        ContentType?: string;
        ContentDisposition?: string;
        Headers?: Record<string, Array<string>>;
        Length?: number | string;
        Name?: string;
        FileName?: string;
    } & {
        itemGuid?: string;
    } & {
        itemTypeId?: number | string;
    } & {
        isTemp?: boolean;
    }), acceptLanguage?: string): CancelablePromise<ApiResponseOfUploadFileResult>;
    /**
     * @param id
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns any OK
     * @throws ApiError
     */
    static getApiFileStorage(id: string, xClientId: string, xTenantId: string, acceptLanguage?: string): CancelablePromise<any>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEmptyData OK
     * @throws ApiError
     */
    static postApiFileStorageCommit(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfGuidData, acceptLanguage?: string): CancelablePromise<ApiResponseOfEmptyData>;
}
