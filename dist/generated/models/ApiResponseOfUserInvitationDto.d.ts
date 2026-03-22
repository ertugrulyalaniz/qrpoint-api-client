import type { UserInvitationDto } from './UserInvitationDto';
export type ApiResponseOfUserInvitationDto = {
    statusCode: number | string;
    message: string;
    data: (null | UserInvitationDto);
};
