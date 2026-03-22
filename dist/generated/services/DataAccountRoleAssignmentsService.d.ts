import type { ApiCommandRequestOfAccountRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAccountRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAccountRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAccountRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAccountRoleAssignmentDto } from '../models/ApiResponseOfAccountRoleAssignmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataAccountRoleAssignmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAccountRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAccountRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAccountRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAccountRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAccountRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAccountRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataAccountRoleAssignmentsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAccountRoleAssignmentDto>;
}
