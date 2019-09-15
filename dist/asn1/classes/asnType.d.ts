import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';
export declare abstract class AsnType extends Base {
    parameterList: string[];
    constraint: Constraint | ConstraintSpec;
}
