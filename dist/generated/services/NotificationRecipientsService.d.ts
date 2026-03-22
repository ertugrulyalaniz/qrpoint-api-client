import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfNotificationRecipientDto } from '../models/ApiResponseOfIReadOnlyListOfNotificationRecipientDto';
import type { ApiResponseOfNotificationRecipientDto } from '../models/ApiResponseOfNotificationRecipientDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class NotificationRecipientsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsCreate(requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsUpdate(requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsBatch(requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsBulk(requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    static postApiNotificationRecipientsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfNotificationRecipientDto>;
}
