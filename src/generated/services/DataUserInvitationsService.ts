/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfUserInvitationDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfUserInvitationDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions';
import type { ApiCommandRequestOfUserInvitationDtoAndEmptyOptions } from '../models/ApiCommandRequestOfUserInvitationDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfUserInvitationDto } from '../models/ApiResponseOfIReadOnlyListOfUserInvitationDto';
import type { ApiResponseOfPagedResultOfUserInvitationDto } from '../models/ApiResponseOfPagedResultOfUserInvitationDto';
import type { ApiResponseOfUserInvitationDto } from '../models/ApiResponseOfUserInvitationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataUserInvitationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsDeletedGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/deleted/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsDeletedGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/deleted/getall',
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
     * @returns ApiResponseOfPagedResultOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsDeletedGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/deleted/getpaged',
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
    public static postApiDataUserInvitationsDeletedRestore(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/deleted/restore',
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
    public static postApiDataUserInvitationsDeletedDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/deleted/delete',
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
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/create',
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
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfUserInvitationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/update',
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
    public static postApiDataUserInvitationsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfUserInvitationDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/bulk',
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
     * @returns ApiResponseOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/getall',
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
     * @returns ApiResponseOfPagedResultOfUserInvitationDto OK
     * @throws ApiError
     */
    public static postApiDataUserInvitationsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfUserInvitationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/getpaged',
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
    public static postApiDataUserInvitationsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/user-invitations/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
