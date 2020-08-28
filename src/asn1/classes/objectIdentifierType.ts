import { Worksheet } from 'exceljs';
import { todo } from 'unimpl';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';

// TODO: Make it singleont
export class ObjectIdentifierType {
  private objectIdentifierTypeTag: undefined;

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ObjectIdentifierType {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      return todo();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return 'OBJECT IDENTIFIER';
  }
}
