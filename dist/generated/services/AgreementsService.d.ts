import type { ApiCommandRequestOfAgreementDtoAndEmptyOptions } from '../models/ApiCommandRequestOfAgreementDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfAgreementDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfAgreementDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfAgreementDto } from '../models/ApiResponseOfAgreementDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfAgreementDto } from '../models/ApiResponseOfIReadOnlyListOfAgreementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AgreementsService {
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsCreate(requestBody: ApiCommandRequestOfAgreementDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsUpdate(requestBody: ApiCommandRequestOfAgreementDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiAgreementsDelete(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiAgreementsCancel(requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsBatch(requestBody: ApiCommandRequestOfListOfAgreementDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfIReadOnlyListOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsBulk(requestBody: ApiCommandRequestOfListOfAgreementDtoAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsGetbyid(requestBody: ApiQueryRequestOfIdData, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsGetall(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAgreementDto>;
    /**
     * @param requestBody
     * @param xDeviceId
     * @param xTenantId
     * @returns ApiResponseOfAgreementDto OK
     * @throws ApiError
     */
    static postApiAgreementsGetpaged(requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, xDeviceId?: string, xTenantId?: string): CancelablePromise<ApiResponseOfAgreementDto>;
}
