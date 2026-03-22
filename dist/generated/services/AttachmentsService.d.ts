import type { ApiCommandRequestOfAttachmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAttachmentDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAttachmentDto } from '../models/ApiResponseOfAttachmentDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAttachmentDto } from '../models/ApiResponseOfIReadOnlyListOfAttachmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AttachmentsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsCreate(requestBody: ApiCommandRequestOfAttachmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsUpdate(requestBody: ApiCommandRequestOfAttachmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiAttachmentsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiAttachmentsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsBatch(requestBody: ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsBulk(requestBody: ApiCommandRequestOfListOfAttachmentDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAttachmentDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAttachmentDto OK
     * @throws ApiError
     */
    static postApiAttachmentsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAttachmentDto>;
}
