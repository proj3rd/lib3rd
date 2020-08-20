import { IParameterMapping } from '../expander';
import { DefinedObjectClass } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
export declare class ObjectSetAssignment {
    name: string;
    definedObjectClass: DefinedObjectClass;
    objectSet: ObjectSet;
    private objectSetAssignmentTag;
    constructor(name: string, definedObjectClass: DefinedObjectClass, objectSet: ObjectSet);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectSetAssignment;
    toString(): string;
}
//# sourceMappingURL=objectSetAssignment.d.ts.map