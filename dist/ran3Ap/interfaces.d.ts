export interface IMsgIeDefinition {
    section: string;
    name: string;
    description: string;
    direction: string;
    definition: IMsgIeDefinitionElem[];
    range: IRangeDefinitionElem[];
    condition: IConditionDefinitionElem[];
}
export interface IMsgIeDefinitionElem {
    'ie/group name': string;
    'presence': string;
    'range': string;
    'ie type and reference': string;
    'semantics description': string;
    'criticality'?: string;
    'assigned criticiality'?: string;
    'depth': number;
}
export interface IRangeDefinitionElem {
    'range bound': string;
    'explanation': string;
}
export interface IConditionDefinitionElem {
    condition: string;
    explanation: string;
}
