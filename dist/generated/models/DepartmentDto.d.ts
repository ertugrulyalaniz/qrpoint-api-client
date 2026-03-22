export type DepartmentDto = {
    departmentId?: number | string;
    departmentName?: string;
    parentId?: number | string | null;
    organizationId?: number | string;
    isEnabled?: boolean;
    description?: string | null;
};
