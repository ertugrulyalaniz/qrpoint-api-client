import type { ApiCommandRequestOfDeviceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfDeviceDtoAndEmptyOptions';
import type { ApiCommandRequestOfIdDataAndEmptyOptions } from '../models/ApiCommandRequestOfIdDataAndEmptyOptions';
import type { ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions } from '../models/ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions';
import type { ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions } from '../models/ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions';
import type { ApiQueryRequestOfIdData } from '../models/ApiQueryRequestOfIdData';
import type { ApiResponseOfDeviceDto } from '../models/ApiResponseOfDeviceDto';
import type { ApiResponseOfIdData } from '../models/ApiResponseOfIdData';
import type { ApiResponseOfIReadOnlyListOfDeviceDto } from '../models/ApiResponseOfIReadOnlyListOfDeviceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataDevicesService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesCreate(xClientId: string, requestBody: ApiCommandRequestOfDeviceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesUpdate(xClientId: string, requestBody: ApiCommandRequestOfDeviceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIdData OK
     * @throws ApiError
     */
    static postApiDataDevicesDelete(xClientId: string, requestBody: ApiCommandRequestOfIdDataAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIdData>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesBatch(xClientId: string, requestBody: ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfIReadOnlyListOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesBulk(xClientId: string, requestBody: ApiCommandRequestOfListOfDeviceDtoAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfIReadOnlyListOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesGetbyid(xClientId: string, requestBody: ApiQueryRequestOfIdData, acceptLanguage?: string): CancelablePromise<ApiResponseOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesGetall(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDeviceDto>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns ApiResponseOfDeviceDto OK
     * @throws ApiError
     */
    static postApiDataDevicesGetpaged(xClientId: string, requestBody: ApiQueryRequestOfEmptyDataAndPagingDataAndEmptyFiltersAndEmptySortAndEmptyOptions, acceptLanguage?: string): CancelablePromise<ApiResponseOfDeviceDto>;
}
