import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';

export abstract class AsnType extends Base {
  public parameterList: string[];
  public constraint: Constraint | ConstraintSpec /* TODO: Remove */;
}
