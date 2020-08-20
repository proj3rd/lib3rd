import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { ObjectClass } from './objectClass';
import { ObjectSetAssignment } from './objectSetAssignment';
import { Parameter } from './parameter';
import { Value } from './value';
export declare type Assignment = TypeAssignment | ObjectClassAssignment | ObjectSetAssignment | ParameterizedTypeAssignment | ValueAssignment;
export declare class TypeAssignment {
    name: string;
    asnType: AsnType;
    private typeAssignmentTag;
    constructor(name: string, asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): TypeAssignment;
    toString(): string;
}
export declare class ObjectClassAssignment {
    name: string;
    objectClass: ObjectClass;
    private objectClassAssignmentTag;
    constructor(name: string, objectClass: ObjectClass);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectClassAssignment;
    toString(): string;
}
export declare class ParameterizedTypeAssignment {
    name: string;
    parameters: Parameter[];
    asnType: AsnType;
    private parameterizedTypeAssignmentTag;
    constructor(name: string, parameters: Parameter[], asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ParameterizedTypeAssignment;
    toString(): string;
}
export declare class ValueAssignment {
    name: string;
    asnType: AsnType;
    value: Value;
    private valueAssignmentTag;
    constructor(name: string, asnType: AsnType, value: Value);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueAssignment;
    toString(): string;
}
export interface ITypeAndValue {
    asnType: AsnType;
    value: Value;
}
//# sourceMappingURL=assignment.d.ts.map