import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfWorkDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfWorkDtoAndEmptyOptions';
import type { ApiCommandRequestOfWorkDtoAndEmptyOptions } from '../models/ApiCommandRequestOfWorkDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfWorkDto } from '../models/ApiResponseOfIReadOnlyListOfWorkDto';
import type { ApiResponseOfWorkDto } from '../models/ApiResponseOfWorkDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataWorksService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfWorkDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfWorkDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataWorksDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfWorkDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfWorkDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfWorkDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfWorkDto OK
     * @throws ApiError
     */
    static postApiDataWorksGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfWorkDto>;
}
