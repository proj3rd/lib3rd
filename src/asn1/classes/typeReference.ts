import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_REFERENCE } from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
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

  /**
   * Expand `typeReference` property.
   * @param modules
   * @param parameterMappings
   * @returns Returns {@link AsnType} of {@link ObjectSet}.
   * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType | ObjectSet {
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
        const expandedType = cloneDeep(asnType).expand(modules, []);
        if (isEqual(expandedType, asnType)) {
          return asnType;
        }
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
        const expandedType = cloneDeep(actualParameter).expand(modules, []);
        if (isEqual(expandedType, actualParameter)) {
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
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return this.typeReference;
    }
    return `${this.typeReference} ${this.constraint.toString()}`;
  }
}
