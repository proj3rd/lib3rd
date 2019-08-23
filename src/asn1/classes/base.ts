import { isEqual } from 'lodash';

import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';

export abstract class Base {
  public moduleName: string;

  public abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: string[]): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;
  public abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                                constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
  public abstract setConstraint(constraint: ConstraintSpec): Base;
  public abstract replaceParameters(parameterMapping: {[parameter: string]: any /* TODO */}): void;

  protected indent(text: string): string {
    return text.replace(/^/gm, '  ');
  }
  protected addToConstants(obj: any, constants: any[]): void {
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
