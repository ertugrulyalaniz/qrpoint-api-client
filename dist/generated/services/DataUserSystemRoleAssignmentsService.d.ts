import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto';
import type { ApiResponseOfUserSystemRoleAssignmentDto } from '../models/ApiResponseOfUserSystemRoleAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataUserSystemRoleAssignmentsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserSystemRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserSystemRoleAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserSystemRoleAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataUserSystemRoleAssignmentsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserSystemRoleAssignmentDto>;
}
