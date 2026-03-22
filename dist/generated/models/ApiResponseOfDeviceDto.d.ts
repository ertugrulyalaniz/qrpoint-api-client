import type { DeviceDto } from './DeviceDto';
export type ApiResponseOfDeviceDto = {
    statusCode: number | string;
    message: string;
    data: (null | DeviceDto);
};
