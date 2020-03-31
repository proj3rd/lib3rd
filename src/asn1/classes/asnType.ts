import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base } from './base';
import { Constraint } from './constraint';

export abstract class AsnType extends Base {
  public parameterList: IParameter[];
  public constraints: Array<Constraint | ConstraintSpec> /* TODO: Remove */;

  public constraintsToString(): string {
    return this.constraints && this.constraints.length ?
    ` (${this.constraints.map((constraint) => constraint.toString()).join(', ')})` : '';
  }

  public abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): AsnType;
}
