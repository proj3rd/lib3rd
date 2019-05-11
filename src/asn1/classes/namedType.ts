import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';

export class NamedType extends Base {
  public name: string;
  public type: Base;
  public optional: boolean;
  public default: any;

  constructor(name: string, type: any) {
    super();

    this.name = name;
    this.type = type;
  }

  public setConstraint(constraint: any): NamedType {
    if (!isEmpty(constraint)) {
      log.warn(`NamedType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): NamedType {
    // TODO
    return this;
  }

  public depthMax(): number {
    return this.type.depthMax();
  }

  public toString(): string {
    const optional = `    ${this.getOptionalString()}`;
    return `${this.name.padEnd(48)}    ${this.type}${optional}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.ie = this.name;
    ieElem.optional = this.getOptionalString();
    [row, col] = this.type.fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth);
    return [row, col];
  }

  private getOptionalString(): string {
    return this.optional ? 'OPTIONAL' :
      this.default !== undefined ? `DEFAULT   ${this.default.toString()}` : '';
  }
}
