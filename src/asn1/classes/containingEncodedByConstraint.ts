import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';

export class ContainingEncodedByConstraint extends Constraint {
  public containing: AsnType;
  public encodedBy: BuiltinValue;

  constructor(containing: AsnType, encodedBy: BuiltinValue) {
    super();

    this.containing = containing;
    this.encodedBy = encodedBy;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): ContainingEncodedByConstraint {
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ContainingEncodedByConstraint {
    return this;
  }

  public toString(): string {
    const constraints = [];
    if (this.containing) {
      constraints.push(`CONTAINING ${this.containing.toString()}`);
    }
    if (this.encodedBy) {
      constraints.push(`ENCODED BY ${this.encodedBy.toString()}`);
    }
    return constraints.join(' ');
  }
}
