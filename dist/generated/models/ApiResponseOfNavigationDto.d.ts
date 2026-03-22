import type { NavigationDto } from './NavigationDto';
export type ApiResponseOfNavigationDto = {
    statusCode: number | string;
    message: string;
    data: (null | NavigationDto);
};
