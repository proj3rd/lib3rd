import { DefinedObjectSet } from '../types';
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
    private componentRelationConstraintTag;
    constructor(definedObjectSet: DefinedObjectSet, atNotations?: AtNotation[]);
    toString(): string;
}
//# sourceMappingURL=componentRelationConstraint.d.ts.map