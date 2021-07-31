import { TypeConstraintsComponent } from '../types/typeConstraintsComponent';
/**
 * Currently it supports only MultipleTypeConstraints
 */
export declare class InnerTypeConstraints {
    components: TypeConstraintsComponent[];
    innerTypeConstraintsTag: boolean;
    constructor(components: TypeConstraintsComponent[]);
    static fromObject(obj: unknown): InnerTypeConstraints;
    toString(): string;
}
//# sourceMappingURL=innerTypeConstraints.d.ts.map