import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';
import { Parameter } from './parameter';

export abstract class AsnType extends Base {
  public parameterList: Parameter[];
  public constraints: Array<Constraint | ConstraintSpec> /* TODO: Remove */;

  public constraintsToString(): string {
    return this.constraints && this.constraints.length ?
    ` (${this.constraints.map((constraint) => constraint.toString()).join(', ')})` : '';
  }

  public abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): AsnType;
}
