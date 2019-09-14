import { ConstraintSpec } from '../visitors/constraintSpec';
import { IParameter } from '../visitors/parameter';
import { Base } from './base';
import { Constraint } from './constraint';

export abstract class AsnType extends Base {
  public parameterList: IParameter[];
  public constraint: Constraint | ConstraintSpec /* TODO: Remove */;
}
