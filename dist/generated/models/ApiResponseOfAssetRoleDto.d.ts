import type { AssetRoleDto } from './AssetRoleDto';
export type ApiResponseOfAssetRoleDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetRoleDto);
};
