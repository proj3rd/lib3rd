import { AsnType } from '../types/asnType';
import { Value } from '../types/value';
export declare class ContentsConstraint {
    asnType: AsnType | undefined;
    value: Value | undefined;
    contentsConstraintTag: boolean;
    constructor(asnType: AsnType | undefined, value: Value | undefined);
    static fromObject(obj: unknown): ContentsConstraint;
    toString(): string;
}
//# sourceMappingURL=contentsConstraint.d.ts.map