import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationDto';
import type { ApiResponseOfOrganizationDto } from '../models/ApiResponseOfOrganizationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrganizationsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsCreate(requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsUpdate(requestBody: ApiCommandRequestOfOrganizationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiOrganizationsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiOrganizationsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsBatch(requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsBulk(requestBody: ApiCommandRequestOfListOfOrganizationDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationDto OK
     * @throws ApiError
     */
    static postApiOrganizationsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationDto>;
}
