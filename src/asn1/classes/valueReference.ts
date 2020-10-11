import { Worksheet } from 'exceljs';
import { setOutlineLevel, drawBorder, IRowInput } from '../../common/spreadsheet';

import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';

import { Modules } from './modules';

export class ValueReference {
  public valueReference: string;

  public reference: string | undefined;

  private valueReferenceTag: undefined;

  constructor(valueReference: string) {
    this.valueReference = valueReference;
  }

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueReference {
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
    return this.valueReference;
  }
}
