import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserInvitationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserInvitationDto } from '../models/ApiResponseOfIReadOnlyListOfUserInvitationDto';
import type { ApiResponseOfUserInvitationDto } from '../models/ApiResponseOfUserInvitationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataUserInvitationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiDataUserInvitationsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
}
