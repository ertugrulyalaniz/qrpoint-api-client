/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfOrganizationSettingDtoAndBatchCommandOptions } from '../models/ApiCommandRequestOfListOfOrganizationSettingDtoAndBatchCommandOptions';
import type { ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions } from '../models/ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiQueryRequestOfIdsData } from '../models/ApiQueryRequestOfIdsData';
import type { ApiResponseOfEntityStatisticsDto } from '../models/ApiResponseOfEntityStatisticsDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfOrganizationSettingDto } from '../models/ApiResponseOfIReadOnlyListOfOrganizationSettingDto';
import type { ApiResponseOfOrganizationSettingDto } from '../models/ApiResponseOfOrganizationSettingDto';
import type { ApiResponseOfPagedResultOfOrganizationSettingDto } from '../models/ApiResponseOfPagedResultOfOrganizationSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataOrganizationSettingsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsCreate(
        xClientId: string,
        requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/create',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsUpdate(
        xClientId: string,
        requestBody: ApiCommandRequestOfOrganizationSettingDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/update',
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
    public static postApiDataOrganizationSettingsDelete(
        xClientId: string,
        requestBody: ApiCommandRequestOfIdDataAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIdData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/delete',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsBatch(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndBatchCommandOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/batch',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsBulk(
        xClientId: string,
        requestBody: ApiCommandRequestOfListOfOrganizationSettingDtoAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/bulk',
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
     * @returns ApiResponseOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsGetbyid(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/getbyid',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsGetbyids(
        xClientId: string,
        requestBody: ApiQueryRequestOfIdsData,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/getbyids',
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
     * @returns ApiResponseOfIReadOnlyListOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsGetall(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfIReadOnlyListOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/getall',
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
     * @returns ApiResponseOfPagedResultOfOrganizationSettingDto OK
     * @throws ApiError
     */
    public static postApiDataOrganizationSettingsGetpaged(
        xClientId: string,
        requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndListOfFilterItemAndListOfSortItemAndEmptyOptions,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfPagedResultOfOrganizationSettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/getpaged',
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
    public static postApiDataOrganizationSettingsGetstatistics(
        xClientId: string,
        acceptLanguage?: string,
    ): CancelablePromise<ApiResponseOfEntityStatisticsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/data/organization-settings/getstatistics',
            headers: {
                'accept-language': acceptLanguage,
                'x-client-id': xClientId,
            },
        });
    }
}
