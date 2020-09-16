import { Worksheet } from 'exceljs';
import { setOutlineLevel } from '../../common/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_TYPE } from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
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
