import type { UserProfileDto } from './UserProfileDto';
export type LoginApiResponse = {
    accessToken: string;
    refreshToken: string;
    userProfile: UserProfileDto;
};
