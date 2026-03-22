import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserInvitationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserInvitationDto } from '../models/ApiResponseOfIReadOnlyListOfUserInvitationDto';
import type { ApiResponseOfUserInvitationDto } from '../models/ApiResponseOfUserInvitationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UserInvitationsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsCreate(requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsUpdate(requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiUserInvitationsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiUserInvitationsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsBatch(requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsBulk(requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    static postApiUserInvitationsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfUserInvitationDto>;
}
