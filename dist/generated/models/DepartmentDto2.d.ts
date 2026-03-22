export type DepartmentDto2 = {
    departmentId: number;
    departmentName: string;
    parentId: number | null;
    organizationId: number;
    enabled: boolean;
    description: string | null;
};
