import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';

export class Sequence extends Base {
  public items: NamedType[];

  constructor(items: any[] /* TODO */) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: any): Sequence {
    if (!isEmpty(constraint)) {
      log.warn(`Sequence could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Sequence {
    this.items.forEach((item) => {
      item.expand();
    });
    return this;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.items.forEach((item) => {
      depthMax = Math.max(depthMax, item.depthMax() + 1);
    });
    return depthMax;
  }

  public toString(): string {
    return !this.items.length ? 'SEQUENCE {}' : [
      'SEQUENCE {',
      this.items.map((item) => this.indent(item.toString())).join(',\n'),
      '}',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.type = 'SEQUENCE';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.items.forEach((item) => {
      [row, col] = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    });
    return [row, col];
  }
}
