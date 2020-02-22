import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';

export class Syntax extends Base {
  public literal: string;
  public primitiveFieldName: string;
  public optional: boolean;

  constructor(literal: string, primitiveFieldName: string, optional: boolean = false) {
    super();

    this.literal = literal;
    this.primitiveFieldName = primitiveFieldName;
    this.optional = optional;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Syntax {
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    throw Error('Syntax.fillWorksheet() shall not be called independently');
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): Syntax {
    return this;
  }

  public toString(): string {
    const syntax = `${this.literal.padEnd(48)}    ${this.primitiveFieldName}`;
    return this.optional ? `[${syntax}]` : syntax;
  }
}
