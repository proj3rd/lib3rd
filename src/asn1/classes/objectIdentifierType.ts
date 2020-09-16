import { Worksheet } from 'exceljs';
import { todo } from 'unimpl';
import { setOutlineLevel } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE } from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';

export class ObjectIdentifierType {
  public static getInstance() {
    return ObjectIdentifierType.instance;
  }

  private static instance: ObjectIdentifierType = new ObjectIdentifierType();

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
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return 'OBJECT IDENTIFIER';
  }
}
