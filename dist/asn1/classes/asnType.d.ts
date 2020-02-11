import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';
import { Parameter } from './parameter';
export declare abstract class AsnType extends Base {
    parameterList: Parameter[];
    constraint: Constraint | ConstraintSpec;
}
