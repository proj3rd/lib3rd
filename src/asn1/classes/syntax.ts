import { Worksheet } from 'exceljs';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  HEADER_REFERENCE,
  headerIndexed,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { PrimitiveFieldName } from './primitiveFieldName';

export class Syntax {
  public literal: string;
  public primitiveFieldName: PrimitiveFieldName;
  public optional: boolean;

  private syntaxTag: undefined;

  constructor(
    literal: string,
    primitiveFieldName: PrimitiveFieldName,
    optional: boolean
  ) {
    this.literal = literal;
    this.primitiveFieldName = primitiveFieldName;
    this.optional = optional;
  }

  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.literal,
      [HEADER_REFERENCE]: this.primitiveFieldName.toString(),
      [HEADER_OPTIONAL]: this.optional ? 'OPTIONAL' : undefined,
    });
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.optional) {
      return `[${this.literal}    ${this.primitiveFieldName.toString()}]`;
    }
    return `${this.literal}    ${this.primitiveFieldName.toString()}`;
  }
}
