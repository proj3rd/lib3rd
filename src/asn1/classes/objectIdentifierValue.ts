import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';

export class ObjectIdentifierValue extends Base {
  public objIdComponentsList: any[]; // TODO

  constructor(objIdComponentsList: any[] /* TODO */) {
    super();

    this.objIdComponentsList = objIdComponentsList;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.objIdComponentsList.forEach((objIdComponents) => {
      depthMax = Math.max(depthMax, objIdComponents.depthMax() + 1);
    });
    return depthMax;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): ObjectIdentifierValue {
    // TODO
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    // TODO
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // TODO
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectIdentifierValue {
    // Do nothing
    return this;
  }

  public toString(): string {
    return !this.objIdComponentsList.length ? ' { }' :
      ` { ${this.objIdComponentsList.map((item) => item.toString()).join(', ')} }`;
  }
}
