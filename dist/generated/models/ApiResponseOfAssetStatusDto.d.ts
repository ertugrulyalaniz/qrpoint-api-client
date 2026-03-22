import type { AssetStatusDto } from './AssetStatusDto';
export type ApiResponseOfAssetStatusDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetStatusDto);
};
