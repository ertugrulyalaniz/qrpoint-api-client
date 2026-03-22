import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto } from '../models/ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto';
import type { ApiResponseOfPointPlaceAssignmentDto } from '../models/ApiResponseOfPointPlaceAssignmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataPointPlaceAssignmentsService {
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsCreate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsUpdate(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfPointPlaceAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsDelete(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsBatch(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsBulk(xDeviceId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfPointPlaceAssignmentDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsGetbyid(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsGetall(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
    /**
     * @param xDeviceId Cihaz Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPointPlaceAssignmentDto OK
     * @throws ApiError
     */
    static postApiDataPointPlaceAssignmentsGetpaged(xDeviceId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfPointPlaceAssignmentDto>;
}
