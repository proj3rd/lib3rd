import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { Worksheet } from 'exceljs';
import { IRowInput, HEADER_TYPE, drawBorder } from '../formatter/spreadsheet';

export class NullType {
  public static getInstance() {
    return NullType.instance;
  }

  private static instance: NullType = new NullType();

  private nullTypeTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): NullType {
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
    return 'NULL';
  }
}
