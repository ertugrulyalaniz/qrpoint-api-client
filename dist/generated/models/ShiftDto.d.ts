export type ShiftDto = {
    shiftId?: number | string;
    shiftName?: string;
    startTime?: string;
    endTime?: string;
    organizationId?: number | string;
    isEnabled?: boolean;
    description?: string | null;
};
