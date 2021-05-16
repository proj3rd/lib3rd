import { DefinedObjectSet } from '../types/definedObjectSet';
import { AtNotation } from './atNotation';
/**
 * X.682 clause 10.7
 * ```
 * { definedObjectSet } { atNotation[0], ..., atNotation[n-1] }
 * ```
 */
export declare class ComponentRelationConstraint {
    definedObjectSet: DefinedObjectSet;
    atNotations: AtNotation[];
    componentRelationConstraintTag: boolean;
    constructor(definedObjectSet: DefinedObjectSet, atNotations?: AtNotation[]);
    static fromObject(obj: unknown): ComponentRelationConstraint;
    toString(): string;
}
//# sourceMappingURL=componentRelationConstraint.d.ts.map