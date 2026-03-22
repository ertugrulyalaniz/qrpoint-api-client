import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPointAssetAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPointAssetAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPointAssetAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPointAssetAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto';
import type { ApiResponseOfPointAssetAssignmentDto } from '../models/ApiResponseOfPointAssetAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPointAssetAssignmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointAssetAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointAssetAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointAssetAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointAssetAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAssetAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointAssetAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointAssetAssignmentsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointAssetAssignmentDto>;
}
