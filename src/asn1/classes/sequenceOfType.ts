import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { drawBorder, HEADER_TYPE, IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';

export class SequenceOfType {
  /**
   * @property {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
   */
  public baseType: AsnType | NamedType | ObjectSet;
  public constraint: Constraint | undefined;

  private sequenceOfTypeTag: undefined;

  constructor(
    baseType: AsnType | NamedType,
    constraint: Constraint | undefined
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  /**
   * Expand `baseType` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): SequenceOfType {
    const expandedBaseType = cloneDeep(this.baseType).expand(
      modules,
      parameterMappings
    );
    if (!isEqual(expandedBaseType, this.baseType)) {
      this.baseType = expandedBaseType;
    }
    if (this.constraint !== undefined) {
      const expandedConstraint = cloneDeep(this.constraint).expand(
        modules,
        parameterMappings
      );
      if (!isEqual(expandedConstraint, this.constraint)) {
        this.constraint = expandedConstraint;
      }
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
