import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import {
  HEADER_REFERENCE,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { DefinedObjectClass } from './asnType';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { PrimitiveFieldName } from './primitiveFieldName';

/**
 * X.681 clause 14
 * ```
 * definedObjectClass.primitiveFieldName[0]....primitiveFieldName[n-1] ( constraint )
 * ```
 */
export class ObjectClassFieldType {
  public definedObjectClass: DefinedObjectClass;
  public fieldName: PrimitiveFieldName[];
  public constraint: Constraint | undefined;

  private objectClassFieldType: undefined;

  constructor(
    definedObjectClass: DefinedObjectClass,
    fieldName: PrimitiveFieldName[]
  ) {
    this.definedObjectClass = definedObjectClass;
    this.fieldName = fieldName;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ObjectClassFieldType {
    return unimpl();
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      unimpl();
    }
    const constraint = constraints[0];
    const { constraintSpec, exceptionSpec } = constraint;
    if (constraintSpec instanceof ContentsConstraint) {
      unimpl();
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      unimpl();
    } else if (constraintSpec instanceof ObjectSet) {
      unimpl();
    } else if (constraintSpec instanceof ComponentRelationConstraint) {
      this.constraint = constraint;
    } else {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_REFERENCE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const fieldNamesString = this.fieldName
      .map((primitiveFieldName) => primitiveFieldName.toString())
      .join('.');
    const outerString = `${this.definedObjectClass.toString()}.${fieldNamesString}`;
    if (this.constraint === undefined) {
      return outerString;
    }
    return `${outerString} ${this.constraint.toString()}`;
  }
}
