import type { DemandCategoryAssetTypeDto } from './DemandCategoryAssetTypeDto';
export type ApiResponseOfDemandCategoryAssetTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | DemandCategoryAssetTypeDto);
};
