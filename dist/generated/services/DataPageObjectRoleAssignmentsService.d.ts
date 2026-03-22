import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto';
import type { ApiResponseOfPageObjectRoleAssignmentDto } from '../models/ApiResponseOfPageObjectRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPageObjectRoleAssignmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfPageObjectRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPageObjectRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPageObjectRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPageObjectRoleAssignmentsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPageObjectRoleAssignmentDto>;
}
