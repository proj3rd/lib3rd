import { IParameterMapping } from '../expander';
import { ConstraintSpec } from '../types/constraintSpec';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';
export declare class Constraint {
    constraintSpec: ConstraintSpec;
    exceptionSpec: undefined;
    constraintTag: boolean;
    constructor(constraint: ConstraintSpec | SizeConstraint);
    static fromObject(obj: unknown): Constraint;
    /**
     * Expand `constraintSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): Constraint;
    toString(): string;
}
//# sourceMappingURL=constraint.d.ts.map