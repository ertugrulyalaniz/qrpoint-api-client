import type { AssetActivityTypeDto } from './AssetActivityTypeDto';
export type ApiResponseOfAssetActivityTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | AssetActivityTypeDto);
};
