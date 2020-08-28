import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { drawBorder, HEADER_TYPE, IRowInput } from '../formatter/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';

export class BooleanType {
  public static getInstance() {
    return BooleanType.instance;
  }

  private static instance: BooleanType = new BooleanType();

  private booleanTypeTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): BooleanType {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return 'BOOLEAN';
  }
}
