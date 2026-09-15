/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfNotificationRecipientDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfNotificationRecipientDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions } from '../models/ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfNotificationRecipientDto } from '../models/ApiResponseOfIReadOnlyListOfNotificationRecipientDto';
import type { ApiResponseOfNotificationRecipientDto } from '../models/ApiResponseOfNotificationRecipientDto';
import type { ApiResponseOfPagedResultOfNotificationRecipientDto } from '../models/ApiResponseOfPagedResultOfNotificationRecipientDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataNotificationRecipientsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/create',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfNotificationRecipientDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/update',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/delete',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/batch',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfNotificationRecipientDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/bulk',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/getbyid',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/getbyids',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/getall',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfPagedResultOfNotificationRecipientDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfNotificationRecipientDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/getpaged',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfEntityStatisticsDto OK
     * @throws ApiError
     */
    public static postApiDataNotificationRecipientsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/notification-recipients/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
