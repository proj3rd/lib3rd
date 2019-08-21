import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';

export class Enumerated extends AsnType {
  public items: any[];

  constructor(items: any[]) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: any): Enumerated {
    if (!isEmpty(constraint)) {
      log.warn(`Enumerated could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: any /* TODO */, moduleName?: string): Enumerated {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    return `ENUMERATED {${this.items.join(', ')}}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.type = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
