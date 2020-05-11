import * as colors from 'colors';
import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';

export class ObjectClassField extends AsnType {
  public moduleReference: string;
  public objectClassReference: string;
  public fieldName: string;
  public alias: string;
  public typeReference: string;

  constructor(moduleReference: string, objectClassReference: string, fieldName: string) {
    super();

    this.moduleReference = moduleReference;
    this.objectClassReference = objectClassReference;
    this.fieldName = fieldName;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectClassField {
    this.constraints = constraints;
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string): ObjectClassField {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): ObjectClassField {
    console.log(colors.blue(__filename), 'replaceParameters()');
    console.log(colors.yellow('Current IE'));
    console.log(this);
    console.log(colors.yellow('Parameter mapping:'));
    console.log(JSON.stringify(parameterMapping, null, 2));
    console.warn(colors.red(`${__filename} replaceParameters() not supported currently`));
    return this;
  }

  public toString(): string {
    const moduleReference = this.moduleReference ? `${this.moduleReference}.` : '';
    const constraint = this.constraints ? ` (${this.constraints.toString()})` : '';
    return `${moduleReference}${this.objectClassReference}.${this.fieldName}${constraint}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
