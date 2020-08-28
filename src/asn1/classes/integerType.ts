import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
import { INamedNumber } from '../types';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SubtypeConstraint } from './subtypeConstraint';

export class IntegerType {
  public constraint: Constraint | undefined;
  public namedNumberList: INamedNumber[];

  private integerTypeTag: undefined;

  constructor(namedNumberList: INamedNumber[] = []) {
    this.namedNumberList = namedNumberList;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): IntegerType {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      return unimpl();
    }
    const constraint = constraints[0];
    const { constraintSpec, exceptionSpec } = constraint;
    if (constraintSpec instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      return unimpl();
    } else if (constraintSpec instanceof ObjectSet) {
      return unimpl();
    } else if (constraintSpec instanceof ComponentRelationConstraint) {
      return unimpl();
    } else if (constraintSpec instanceof SubtypeConstraint) {
      this.constraint = constraint;
    } else {
      throw Error();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const arrToString = ['INTEGER'];
    if (this.namedNumberList.length > 0) {
      const namedNumberListString = this.namedNumberList
        .map((namedNumber) => {
          return `${namedNumber.name} (${namedNumber.valueLiteral})`;
        })
        .join(', ');
      arrToString.push(`{${namedNumberListString}}`);
    }
    if (this.constraint !== undefined) {
      arrToString.push(this.constraint.toString());
    }
    return arrToString.join(' ');
  }
}
