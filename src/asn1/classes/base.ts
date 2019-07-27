import { isEqual } from 'lodash';

import { IFormatConfig, IIe } from '../format/xlsx';

export abstract class Base {
  public moduleName: string;

  public abstract expand(asn1Pool: any /* TODO */, moduleName?: string, parameterList?: string[]): Base;
  public abstract depthMax(): number;
  public abstract toString(): string;
  public abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                                constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
  public abstract replaceParameters(parameterMapping: {[parameter: string]: any /* TODO */}): void;

  protected abstract setConstraint(constraint: any): Base;
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
