import type { ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfActionRoleAssignmentDto } from '../models/ApiResponseOfActionRoleAssignmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataActionRoleAssignmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfActionRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfActionRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfActionRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataActionRoleAssignmentsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfActionRoleAssignmentDto>;
}
