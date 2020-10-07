import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE } from '../formatter/spreadsheet';
import { INamedBit } from '../types';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SizeConstraint } from './sizeConstraint';

export class BitStringType {
  public constraint: Constraint | undefined;
  public namedBitList: INamedBit[];

  private bitStringTypeTag: undefined;

  constructor(namedBitList: INamedBit[] = []) {
    this.namedBitList = namedBitList;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): BitStringType {
    if (parameterMappings.length) {
      return unimpl(this, parameterMappings);
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
      return;
    } if (constraintSpec instanceof InnerTypeConstraints) {
      unimpl();
      return;
    } if (constraintSpec instanceof ObjectSet) {
      unimpl();
      return;
    } if (constraintSpec instanceof ComponentRelationConstraint) {
      unimpl();
      return;
    }
    if (constraintSpec.elementSetSpecList.length !== 1) {
      unimpl();
      return;
    }
    const elementSetSpec = constraintSpec.elementSetSpecList[0];
    if (elementSetSpec instanceof ExtensionMarker) {
      throw Error('Not implemented');
    }
    if (elementSetSpec.intersectionsList.length > 1) {
      unimpl();
      return;
    }
    const intersections = elementSetSpec.intersectionsList[0];
    if (intersections.length !== 1) {
      unimpl();
      return;
    }
    const intersectionElements = intersections[0];
    if (intersectionElements instanceof SizeConstraint) {
      this.constraint = constraint;
    } else {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    // eslint-disable-next-line no-param-reassign
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const arrToString = ['BIT STRING'];
    if (this.namedBitList.length > 0) {
      const namedBitListString = this.namedBitList
        .map((namedBit) => `${namedBit.name} (${namedBit.valueLiteral})`)
        .join(', ');
      arrToString.push(`{${namedBitListString}}`);
    }
    if (this.constraint !== undefined) {
      arrToString.push(`${this.constraint.toString()}`);
    }
    return arrToString.join(' ');
  }
}
