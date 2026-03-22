export type UserDto = {
    userId: number;
    phoneNumber: string;
    enabled: boolean;
    locked: boolean;
    description: string | null;
};
