import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';

export class NamedType extends Base {
  public name: string;
  public type: Base;
  public optional: boolean;
  public default: BuiltinValue;
  public tag?: string;

  constructor(name: string, type: Base) {
    super();

    this.name = name;
    this.type = type;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): NamedType {
    if (!isEmpty(constraints)) {
      log.warn(`NamedType could not handle constraint ${JSON.stringify(constraints)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: IParameter[] = []): NamedType {
    const expandedType = this.type.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    this.type = expandedType;
    return this;
  }

  public depthMax(): number {
    return this.type.depthMax();
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    this.type.replaceParameters(parameterMapping);
  }

  public toString(): string {
    return `${this.name.padEnd(48)}    ${this.type}${this.getOptionalString()}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.ie = this.name;
    const moduleReference = (this as any /* TODO */).type.moduleReference;
    const typeReference = (this as any /* TOdO */).type.typeReference;
    ieElem.reference = `${moduleReference ? moduleReference + '.' : ''}${typeReference ? typeReference : ''}`;
    ieElem.optional = this.optional || this.default ? 'OPTIONAL' : '';
    ieElem.default = this.default ? this.default.toString() : '';
    const tag = this.tag;
    ieElem.tag =  tag ? tag.replace(/^-- *?/, '') : '';
    [row, col] = this.type.fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth);
    return [row, col];
  }

  private getOptionalString(): string {
    return this.optional ? '    OPTIONAL' :
      this.default !== undefined ? `    DEFAULT    ${this.default.toString()}` : '';
  }
}
