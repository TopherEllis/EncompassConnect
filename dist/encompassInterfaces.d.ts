export interface PipeLineContract {
    fields: string[];
    sortOrder?: sortOrderContract[];
}
export interface LoanGuidsPipeLineContract extends PipeLineContract {
    loanGuids: string[];
}
export interface FilterPipeLineContract extends PipeLineContract {
    filter: PipeLineFilter;
}
export interface PipeLineFilter {
    operator: "and" | "or";
    terms: PipeLineTerms[];
}
export interface PipeLineTerms {
    canonicalName: string;
    matchType: "greaterThanOrEquals" | "exact" | "greaterThan" | "isNotEmpty" | "isEmpty" | "lessThan" | "lessThanOrEquals" | "equals" | "notEquals" | "startsWith" | "contains";
    value?: string | number | Date;
    precision?: "exact" | "day" | "month" | "year" | "recurring";
}
export interface sortOrderContract {
    canonicalName: string;
    order: "asc" | "desc";
}
export interface LoanAssociateProperties {
    loanAssociateType: "user" | "group";
    id: string;
    name?: string;
    phone?: string;
    cellphone?: string;
    fax?: string;
    email?: string;
    roleId?: string;
    roleName?: string;
}
export interface UserInfoContract {
    viewEmailSignature?: boolean;
    start?: number;
    limit?: number | string;
    filter?: {
        groupId?: string | number;
        roleId?: string | number;
        personaId?: string | number;
        organizationId?: string | number;
        userName?: string;
    };
}
export interface Organization {
    entityId: string | number;
    entityType: string;
    entityName: string;
    entityUri: string;
}
export interface UserProfile {
    id: string;
    lastName: string;
    firstName: string;
    fullName: string;
    email: string;
    phone: string;
    userIndicators: string[];
    peerLoanAccess: string;
    lastLogin: string | Date;
    encompassVersion: string;
    personalStatusOnline: boolean;
    personas: any[];
    workingFolder?: string;
    organization?: Organization;
    subordinateLoanAccess?: string;
    comments?: string;
    ccSite?: any;
}
export interface LicenseInformation {
    state: string;
    enabled: boolean;
    license?: string;
    expirationDate?: string | Date;
    issueDate?: string | Date;
    startDate?: string | Date;
}
export interface CreateLoanContract {
    view?: "entity" | "id";
    loanTemplate?: string;
    loanFolder?: string;
    loan?: any;
}
