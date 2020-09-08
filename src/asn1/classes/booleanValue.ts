import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import {
  appendInColumn,
  drawBorder,
  HEADER_TYPE,
  IRowInput,
  setOutlineLevel,
} from '../formatter/spreadsheet';
import { Modules } from './modules';

export class BooleanValue {
  public literal: string;
  public value: boolean;

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

  public expand(
    moduleS: Modules,
    parameterMappings: IParameterMapping[]
  ): BooleanValue {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return this.literal;
  }
}
