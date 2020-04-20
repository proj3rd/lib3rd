import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';

export class DefinedObjectClass extends Base {
  public moduleReference: string;
  public objectClassReference: string;

  constructor(moduleReference: string, objectClassReference: string) {
    super();

    this.moduleReference = moduleReference;
    this.objectClassReference = objectClassReference;
  }

  public depthMax(): number {
    // TODO
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): DefinedObjectClass {
    // TODO
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // TODO
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): DefinedObjectClass {
    return this;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): DefinedObjectClass {
    // TODO
    return this;
  }

  public toString(): string {
    return this.moduleReference ? `${this.moduleReference}.${this.objectClassReference}` : this.objectClassReference;
  }
}
