import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import {
  drawBorder,
  HEADER_TYPE,
  IRowInput,
  setOutlineLevel,
} from '../formatter/spreadsheet';
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
    if (parameterMappings.length && this.constraint !== undefined) {
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
    setOutlineLevel(r, depth);
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
      const constraintString = this.constraint
        .toString()
        .replace(/(\s|\n)+/g, ' ');
      arrToString.push(constraintString);
    }
    return arrToString.join(' ');
  }
}
