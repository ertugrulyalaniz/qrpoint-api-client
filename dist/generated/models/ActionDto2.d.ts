export type ActionDto2 = {
    actionId: number;
    actionName: string;
    parentId: number | null;
    moduleId: number;
    enabled: boolean;
    description: string | null;
};
