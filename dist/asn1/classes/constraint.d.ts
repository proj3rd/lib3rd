import { IParameterMapping } from '../expander';
import { _ConstraintSpec } from '../types';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';
export declare class Constraint {
    constraintSpec: _ConstraintSpec;
    exceptionSpec: undefined;
    private constraintTag;
    constructor(constraint: _ConstraintSpec | SizeConstraint);
    /**
     * Expand `constraintSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): Constraint;
    toString(): string;
}
//# sourceMappingURL=constraint.d.ts.map