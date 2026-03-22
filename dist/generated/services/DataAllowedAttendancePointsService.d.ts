import type { ApiCommandRequestOfAllowedAttendancePointDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAllowedAttendancePointDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAllowedAttendancePointDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAllowedAttendancePointDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAllowedAttendancePointDto } from '../models/ApiResponseOfAllowedAttendancePointDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto } from '../models/ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataAllowedAttendancePointsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAllowedAttendancePointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfAllowedAttendancePointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAllowedAttendancePointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfAllowedAttendancePointDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAllowedAttendancePointDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfAllowedAttendancePointDto OK
     * @throws ApiError
     */
    static postApiDataAllowedAttendancePointsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfAllowedAttendancePointDto>;
}
