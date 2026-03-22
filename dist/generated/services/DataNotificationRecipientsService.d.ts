import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfNotificationRecipientDto } from '../models/ApiResponseOfIReadOnlyListOfNotificationRecipientDto';
import type { ApiResponseOfNotificationRecipientDto } from '../models/ApiResponseOfNotificationRecipientDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataNotificationRecipientsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsCreate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsUpdate(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsDelete(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsBatch(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsBulk(xClientId: string, xTenantId: string, requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsGetbyid(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsGetall(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param xTenantId Tenant Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiDataNotificationRecipientsGetpaged(xClientId: string, xTenantId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
}
