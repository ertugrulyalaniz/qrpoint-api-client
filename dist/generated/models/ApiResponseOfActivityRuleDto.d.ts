import type { ActivityRuleDto } from './ActivityRuleDto';
export type ApiResponseOfActivityRuleDto = {
    statusCode: number | string;
    message: string;
    data: (null | ActivityRuleDto);
};
