import type { AssetDto } from './AssetDto';
export type ApiResponseOfAssetDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetDto);
};
