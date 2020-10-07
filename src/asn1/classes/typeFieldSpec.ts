import { Worksheet } from 'exceljs';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_NAME_BASE, HEADER_OPTIONAL } from '../formatter/spreadsheet';
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

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): TypeFieldSpec {
    // TODO: Shall `optionality` be expanded?
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    // eslint-disable-next-line no-param-reassign
    row[
      headerIndexed(HEADER_NAME_BASE, depth)
    ] = this.fieldReference.toString();
    // eslint-disable-next-line no-param-reassign
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
