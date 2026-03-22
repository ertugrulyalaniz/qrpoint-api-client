import type { BrandDto } from './BrandDto';
export type ApiResponseOfBrandDto = {
    statusCode: number;
    message: string;
    data: BrandDto;
};
