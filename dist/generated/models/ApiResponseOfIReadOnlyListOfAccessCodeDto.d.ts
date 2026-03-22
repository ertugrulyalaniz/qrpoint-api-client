import type { AccessCodeDto2 } from './AccessCodeDto2';
export type ApiResponseOfIReadOnlyListOfAccessCodeDto = {
    statusCode: number;
    message: string;
    data: Array<AccessCodeDto2> | null;
};
