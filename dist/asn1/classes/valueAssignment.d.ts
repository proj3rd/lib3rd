import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Value } from './value';
export declare class ValueAssignment {
    name: string;
    asnType: AsnType;
    value: Value;
    private valueAssignmentTag;
    constructor(name: string, asnType: AsnType, value: Value);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueAssignment;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=valueAssignment.d.ts.map