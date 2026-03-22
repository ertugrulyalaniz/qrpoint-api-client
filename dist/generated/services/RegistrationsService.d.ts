import type { ActivateUserEmployeeApiRequest } from '../models/ActivateUserEmployeeApiRequest';
import type { ApproveAgreementApiRequest } from '../models/ApproveAgreementApiRequest';
import type { RegisterOrganizationApiRequest } from '../models/RegisterOrganizationApiRequest';
import type { RegisterUserApiRequest } from '../models/RegisterUserApiRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class RegistrationsService {
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    static postApiRegistrationsRegisterOrganization(xClientId: string, requestBody: RegisterOrganizationApiRequest, acceptLanguage?: string): CancelablePromise<void>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    static postApiRegistrationsRegisterUser(xClientId: string, requestBody: RegisterUserApiRequest, acceptLanguage?: string): CancelablePromise<void>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    static postApiRegistrationsApproveAgreement(xClientId: string, requestBody: ApproveAgreementApiRequest, acceptLanguage?: string): CancelablePromise<void>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param requestBody
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns void
     * @throws ApiError
     */
    static postApiRegistrationsActivateUserContact(xClientId: string, requestBody: ActivateUserEmployeeApiRequest, acceptLanguage?: string): CancelablePromise<void>;
    /**
     * @param xClientId İstemci Kimliği (Zorunlu)
     * @param acceptLanguage pass the locale here: examples like => tr,en, en-US
     * @returns string OK
     * @throws ApiError
     */
    static getApiRegistrationsSystem(xClientId: string, acceptLanguage?: string): CancelablePromise<string>;
}
