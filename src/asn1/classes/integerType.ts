import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
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

  public reference: string | undefined;

  private integerTypeTag: undefined;

  constructor(namedNumberList: INamedNumber[] = []) {
    this.namedNumberList = namedNumberList;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): IntegerType {
    if (parameterMappings.length && this.constraint !== undefined) {
      const expandedConstraint = cloneDeep(this.constraint).expand(
        modules,
        parameterMappings,
      );
      if (!isEqual(expandedConstraint, this.constraint)) {
        this.constraint = expandedConstraint;
      }
    }
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
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
    const { constraintSpec } = constraint;
    if (constraintSpec instanceof ContentsConstraint) {
      unimpl();
    } if (constraintSpec instanceof InnerTypeConstraints) {
      unimpl();
    } if (constraintSpec instanceof ObjectSet) {
      unimpl();
    } if (constraintSpec instanceof ComponentRelationConstraint) {
      unimpl();
    } if (constraintSpec instanceof SubtypeConstraint) {
      this.constraint = constraint;
    } else {
      throw Error();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const arrToString = ['INTEGER'];
    if (this.namedNumberList.length > 0) {
      const namedNumberListString = this.namedNumberList
        .map((namedNumber) => `${namedNumber.name} (${namedNumber.valueLiteral})`)
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
