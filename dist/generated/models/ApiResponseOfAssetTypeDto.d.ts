import type { AssetTypeDto } from './AssetTypeDto';
export type ApiResponseOfAssetTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetTypeDto);
};
