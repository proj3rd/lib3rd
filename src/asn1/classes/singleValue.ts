import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';

export class SingleValue extends Base {
  public value: BuiltinValue;

  constructor(value: BuiltinValue) {
    super();

    this.value = value;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): SingleValue {
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

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): SingleValue {
    // Do nothing
    return this;
  }

  public toString(): string {
    return this.value.toString();
  }
}
