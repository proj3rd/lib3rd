import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import {
  drawBorder,
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  headerIndexed,
  IRowInput,
  setOutlineLevel,
} from '../formatter/spreadsheet';
import { Modules } from './modules';
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

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): TypeFieldSpec {
    // TODO: Shall `optionality` be expanded?
    return this;
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
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.optionality === undefined) {
      return this.fieldReference.toString();
    }
    return `${this.fieldReference.toString()} ${this.optionality.toString()}`;
  }
}
