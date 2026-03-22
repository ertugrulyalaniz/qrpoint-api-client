import type { AccountDto } from './AccountDto';
import type { LookupDataDto } from './LookupDataDto';
import type { MasterDataDto } from './MasterDataDto';
export type GetAllMobileDataResult = {
    lookupData: LookupDataDto;
    masterData: MasterDataDto;
    account: AccountDto;
};
