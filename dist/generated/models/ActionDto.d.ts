export type ActionDto = {
    actionId?: number | string;
    actionName?: string;
    parentId?: number | string | null;
    moduleId?: number | string;
    isEnabled?: boolean;
    description?: string | null;
};
