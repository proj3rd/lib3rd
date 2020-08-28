import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';

export class SequenceOfType {
  public baseType: AsnType | NamedType;
  public constraint: Constraint | undefined;

  private sequenceOfTypeTag: undefined;

  constructor(
    baseType: AsnType | NamedType,
    constraint: Constraint | undefined
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): SequenceOfType {
    const expandedBaseType = this.baseType.expand(modules, parameterMappings);
    if (expandedBaseType !== undefined) {
      this.baseType = expandedBaseType;
    }
    return this;
  }

  public getDepth(): number {
    return this.baseType.getDepth();
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    // TODO: Is it enough ?
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return `SEQUENCE OF ${this.baseType.toString()}`;
    }
    return `SEQUENCE ${this.constraint.toString()} OF ${this.baseType.toString()}`;
  }
}
