import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';

export class Null extends AsnType {
  public setConstraint(constraint: any): Null {
    if (!isEmpty(constraint)) {
      log.warn(`Null could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: any /* TODO */, moduleName?: string): Null {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(paramterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    return 'NULL';
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.type = 'NULL';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
