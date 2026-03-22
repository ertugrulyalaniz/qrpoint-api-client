/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountDto } from './AccountDto';
import type { IndicatorDto } from './IndicatorDto';
import type { LookupDataDto } from './LookupDataDto';
import type { MasterDataDto } from './MasterDataDto';
export type GetAllMobileDataResult = {
    lookupData: LookupDataDto;
    masterData: MasterDataDto;
    account: AccountDto;
    indicators: Array<IndicatorDto>;
};

