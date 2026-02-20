import { AsnType } from '../types/asnType';
import { Value } from '../types/value';
import { Modules } from './modules';
export declare class ValueAssignment {
    name: string;
    asnType: AsnType;
    value: Value;
    valueAssignmentTag: boolean;
    constructor(name: string, asnType: AsnType, value: Value);
    static fromObject(obj: unknown): ValueAssignment;
    expand(modules: Modules): ValueAssignment;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=valueAssignment.d.ts.map