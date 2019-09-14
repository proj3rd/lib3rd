import { isEqual } from 'lodash';

import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { IParameterMapping } from './definedType';

export interface IConstantAndModule {
  constant: BuiltinValue;
  moduleName: string;
}

export abstract class Base {
  public moduleName: string;

  public abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;
  public abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                                constants: IConstantAndModule[], formatConfig: IFormatConfig,
                                depth?: number): [number, number];
  public abstract setConstraint(constraint: ConstraintSpec): Base;
  public abstract replaceParameters(parameterMapping: IParameterMapping[]): void;

  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
  protected addToConstants(obj: BuiltinValue, constants: IConstantAndModule[]): void {
    if (obj !== undefined && isNaN(Number(obj)) && constants.findIndex((value) => {
      return isEqual(value.constant, obj);
    }) === -1) {
      constants.push({constant: obj, moduleName: this.moduleName});
    }
  }
  protected getModuleNameToPass(moduleName?: string): string {
    return this.moduleName !== undefined ? this.moduleName : moduleName;
  }
}
