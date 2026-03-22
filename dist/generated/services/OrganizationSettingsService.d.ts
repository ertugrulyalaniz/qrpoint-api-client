import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationSettingDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationSettingDto';
import type { ApiResponseOfOrganizationSettingDto } from '../models/ApiResponseOfOrganizationSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrganizationSettingsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsCreate(requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsUpdate(requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsBatch(requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsBulk(requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    static postApiOrganizationSettingsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfOrganizationSettingDto>;
}
