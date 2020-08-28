import { Worksheet } from 'exceljs';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  headerIndexed,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';

export class TypeFieldSpec {
  public fieldReference: PrimitiveFieldName;
  public optionality: Optionality | undefined;

  private typeFieldSpecTag: undefined;

  constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality) {
    this.fieldReference = fieldRerence;
    this.optionality = optionality;
  }

  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[
      headerIndexed(HEADER_NAME_BASE, depth)
    ] = this.fieldReference.toString();
    row[HEADER_OPTIONAL] = this.optionality
      ? this.optionality.toString()
      : undefined;
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.optionality === undefined) {
      return this.fieldReference.toString();
    }
    return `${this.fieldReference.toString()} ${this.optionality.toString()}`;
  }
}
