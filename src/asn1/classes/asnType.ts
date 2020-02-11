import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';
import { Parameter } from './parameter';

export abstract class AsnType extends Base {
  public parameterList: Parameter[];
  public constraint: Constraint | ConstraintSpec /* TODO: Remove */;
}
