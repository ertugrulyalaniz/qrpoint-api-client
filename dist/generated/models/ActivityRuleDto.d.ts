export type ActivityRuleDto = {
    activityRuleId?: number | string;
    organizationId?: number | string;
    templateId?: number | string;
    triggerTypeId?: number | string;
    cronExpression?: string | null;
    expireDuration?: string | null;
    lastRunAt?: any;
    isEnabled?: boolean;
};
