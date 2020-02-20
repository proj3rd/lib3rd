import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
import { SingleValue } from './singleValue';
import { ValueRange } from './valueRange';

export class SizeConstraint extends Constraint {
  public sizeConstraint: SingleValue | ValueRange;

  constructor(sizeConstraint: SingleValue | ValueRange) {
    super();

    this.sizeConstraint = sizeConstraint;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): SizeConstraint {
    // Do nothing
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // Do nothing
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): SizeConstraint {
    // Do nothing
    return this;
  }

  public toString(): string {
    return `SIZE (${this.sizeConstraint.toString()})`;
  }
}
