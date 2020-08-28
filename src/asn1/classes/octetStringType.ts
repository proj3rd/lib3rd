import { Row, Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { SizeConstraint } from '../classes/sizeConstraint';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

export class OctetStringType {
  public constraint: Constraint | undefined;

  private octetStringTypeTag: undefined;

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): OctetStringType {
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
      this.constraint = constraint;
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      return unimpl();
    } else if (constraintSpec instanceof ObjectSet) {
      return unimpl();
    } else if (constraintSpec instanceof ComponentRelationConstraint) {
      return unimpl();
    } else {
      if (constraintSpec.elementSetSpecList.length !== 1) {
        return unimpl();
      }
      const elementSetSpec = constraintSpec.elementSetSpecList[0];
      if (elementSetSpec instanceof ExtensionMarker) {
        throw Error('Not implemented');
      }
      if (elementSetSpec.intersectionsList.length > 1) {
        return unimpl();
      }
      const intersections = elementSetSpec.intersectionsList[0];
      if (intersections.length !== 1) {
        return unimpl();
      }
      const intersectionElements = intersections[0];
      if (intersectionElements instanceof SizeConstraint) {
        this.constraint = constraint;
      } else {
        unimpl();
      }
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return 'OCTET STRING';
    }
    return `OCTET STRING ${this.constraint.toString()}`;
  }
}
