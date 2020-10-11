import { Worksheet } from 'exceljs';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';

import { Modules } from './modules';

export class BooleanValue {
  public literal: string;
  public value: boolean;

  public reference: string | undefined;

  private booleanValueTag: undefined;

  constructor(literal: string) {
    this.literal = literal;
    if (literal === 'TRUE' || literal === 'true') {
      this.value = true;
    } else if (literal === 'FALSE' || literal === 'false') {
      this.value = false;
    } else {
      throw Error();
    }
  }

  // eslint-disable-next-line no-unused-vars
  public expand(moduleS: Modules, parameterMappings: IParameterMapping[]): BooleanValue {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return this.literal;
  }
}
