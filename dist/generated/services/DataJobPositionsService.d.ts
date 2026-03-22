import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfJobPositionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfJobPositionDtoAndEmptyOptions';
import type { ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfJobPositionDto } from '../models/ApiResponseOfIReadOnlyListOfJobPositionDto';
import type { ApiResponseOfJobPositionDto } from '../models/ApiResponseOfJobPositionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataJobPositionsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfJobPositionDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfJobPositionDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataJobPositionsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfJobPositionDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfJobPositionDto OK
     * @throws ApiError
     */
    static postApiDataJobPositionsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfJobPositionDto>;
}
