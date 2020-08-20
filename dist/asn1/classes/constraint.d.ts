import { _ConstraintSpec } from '../types';
import { SizeConstraint } from './sizeConstraint';
export declare class Constraint {
    constraintSpec: _ConstraintSpec;
    exceptionSpec: undefined;
    private constraintTag;
    constructor(constraint: _ConstraintSpec | SizeConstraint);
    toString(): string;
}
//# sourceMappingURL=constraint.d.ts.map