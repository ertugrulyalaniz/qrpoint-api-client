import type { UserDto } from './UserDto';
export type ApiResponseOfUserDto = {
    statusCode: number;
    message: string;
    data: UserDto;
};
