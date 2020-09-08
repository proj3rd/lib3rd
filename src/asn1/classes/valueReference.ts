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

export class ValueReference {
  public valueReference: string;

  private valueReferenceTag: undefined;

  constructor(valueReference: string) {
    this.valueReference = valueReference;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ValueReference {
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
    return this.valueReference;
  }
}
