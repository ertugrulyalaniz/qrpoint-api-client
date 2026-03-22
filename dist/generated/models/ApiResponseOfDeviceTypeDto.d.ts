import type { DeviceTypeDto } from './DeviceTypeDto';
export type ApiResponseOfDeviceTypeDto = {
    statusCode: number | string;
    message: string;
    data: (null | DeviceTypeDto);
};
