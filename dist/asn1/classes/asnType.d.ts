import { ConstraintSpec } from '../visitors/constraintSpec';
import { IParameter } from '../visitors/parameter';
import { Base } from './base';
import { Constraint } from './constraint';
export declare abstract class AsnType extends Base {
    parameterList: IParameter[];
    constraint: Constraint | ConstraintSpec;
}
