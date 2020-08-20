import { _ElementSetSpecs } from '../types';
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export declare class ObjectSet {
    objectSetSpec: _ElementSetSpecs;
    private objectSetTag;
    constructor(objectSetSpec: _ElementSetSpecs);
    toString(): string;
}
//# sourceMappingURL=objectSet.d.ts.map