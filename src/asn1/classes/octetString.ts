import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';

export class OctetString extends Base {
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;
  public containing: any /* TODO */;

  public setConstraint(constraint: any): OctetString {
    if ('value' in constraint) {
      this.size = constraint.value;
      delete constraint.value;
      this.sizeMin = undefined;
      this.sizeMax = undefined;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.sizeMin = constraint.min;
      delete constraint.min;
      this.sizeMax = constraint.max;
      delete constraint.max;
      this.size = undefined;
    }
    if ('containing' in constraint) {
      this.containing = constraint.containing;
      delete constraint.containing;
    }
    if (!isEmpty(constraint)) {
      log.warn(`OctetStringType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: any /* TODO */, moduleName?: string): OctetString {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public toString(): string {
    const containing = this.containing ? ` (CONTAINING ${this.containing.toString()})` : '';
    const size = this.size !== undefined ? ` (SIZE (${this.size}))` :
    this.sizeMin !== undefined && this.sizeMax !== undefined ? ` (SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
    return `OCTET STRING${containing}${size}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.type = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.addToConstants(this.size, constants);
    this.addToConstants(this.sizeMin, constants);
    this.addToConstants(this.sizeMax, constants);
    return [row, col];
  }
}
