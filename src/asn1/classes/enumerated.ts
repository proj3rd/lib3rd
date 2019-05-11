import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';

export class Enumerated extends Base {
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

  public expand(): Enumerated {
    return this;
  }

  public depthMax(): number {
    return 1;
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
