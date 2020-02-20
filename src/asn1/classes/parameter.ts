import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';

export class Parameter extends Base {
  public paramGovernor: any /* TODO */;
  public dummyReference: string;

  constructor(paramGovernor: any /* TODO */, dummyReference: string) {
    super();

    if (!dummyReference) {
      dummyReference = paramGovernor;
      paramGovernor = undefined;
    }
    this.paramGovernor = paramGovernor;
    this.dummyReference = dummyReference;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Parameter {
    // Do nothing
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // Do nothing
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // TODO
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): Parameter {
    // TODO
    return this;
  }

  public toString(): string {
    return !this.paramGovernor ? this.dummyReference.toString() :
      `${this.paramGovernor.toString()}: ${this.dummyReference.toString()}`;
  }
}
