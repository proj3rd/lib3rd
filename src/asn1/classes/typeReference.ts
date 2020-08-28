import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import {
  HEADER_REFERENCE,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ParameterizedTypeAssignment } from './parameterizedTypeAssignment';
import { TypeAssignment } from './typeAssignment';
import { ValueAssignment } from './valueAssignment';

export class TypeReference {
  public typeReference: string;
  public constraint: Constraint | undefined;

  private typeReferenceTag: undefined;

  constructor(typeReference: string) {
    this.typeReference = typeReference;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    const parameterMapping = parameterMappings.find(
      (mapping) => mapping.parameter.dummyReference === this.typeReference
    );
    if (parameterMapping === undefined) {
      // A case that typeReference references another IE.
      const referencedAssignment = modules.findAssignment(this.typeReference);
      if (referencedAssignment === undefined) {
        return this;
      } else if (referencedAssignment instanceof TypeAssignment) {
        const { asnType } = referencedAssignment;
        const expandedType = asnType.expand(modules, []);
        return expandedType;
      } else if (referencedAssignment instanceof ParameterizedTypeAssignment) {
        return unimpl();
      } else if (referencedAssignment instanceof ValueAssignment) {
        return unimpl();
      }
    } else if (parameterMapping.actualParameter === undefined) {
      // A case that typeReference is a dummyReference.
      return this;
    } else {
      // A case that typeReference shall be substituted with an actualParameter.
      const { actualParameter } = parameterMapping;
      if (actualParameter instanceof TypeReference) {
        const expandedType = actualParameter.expand(modules, []);
        if (expandedType === undefined) {
          return actualParameter;
        }
        return expandedType;
      } else {
        return unimpl(actualParameter.constructor.name);
      }
    }
    throw Error();
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
      return unimpl();
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      this.constraint = constraint;
    } else {
      return unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_REFERENCE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return this.typeReference;
    }
    return `${this.typeReference} ${this.constraint.toString()}`;
  }
}
