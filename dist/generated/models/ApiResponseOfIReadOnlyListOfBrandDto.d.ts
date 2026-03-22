import type { BrandDto2 } from './BrandDto2';
export type ApiResponseOfIReadOnlyListOfBrandDto = {
    statusCode: number;
    message: string;
    data: Array<BrandDto2> | null;
};
