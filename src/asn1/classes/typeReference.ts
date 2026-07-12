/* eslint-disable no-param-reassign */
import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from '../../utils/unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { HEADER_REFERENCE } from '../formatter/spreadsheet';
import { AsnType } from '../types/asnType';
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

  public reference: string | undefined;

  public typeReferenceTag = true;

  constructor(typeReference: string) {
    this.typeReference = typeReference;
  }

  public static fromObject(obj: unknown) {
    const { typeReference: typeReferenceObject, constraint: constraintObj, typeReferenceTag } = obj as TypeReference;
    if (!typeReferenceTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!typeReferenceObject || typeof typeReferenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraint = constraintObj ? Constraint.fromObject(constraintObj) : undefined;
    const typeReference = new TypeReference(typeReferenceObject);
    typeReference.constraint = constraint;
    return typeReference;
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
    parameterMappings: IParameterMapping[],
  ): AsnType | ObjectSet {
    const parameterMapping = parameterMappings.find(
      (mapping) => mapping.parameter.dummyReference === this.typeReference,
    );
    if (parameterMapping === undefined) {
      // A case that typeReference references another IE.
      const referencedAssignment = modules.findAssignment(this.typeReference);
      if (referencedAssignment === undefined) {
        return this;
      } if (referencedAssignment instanceof TypeAssignment) {
        const asnType = cloneDeep(referencedAssignment.asnType);
        const expandedType = cloneDeep(cloneDeep(asnType).expand(modules, []));
        if (isEqual(expandedType, asnType)) {
          asnType.reference = this.toString();
          return asnType;
        }
        expandedType.reference = this.toString();
        return expandedType;
      } if (referencedAssignment instanceof ParameterizedTypeAssignment) {
        return unimpl();
      } if (referencedAssignment instanceof ValueAssignment) {
        return unimpl();
      }
    } else if (parameterMapping.actualParameter === undefined) {
      // A case that typeReference is a dummyReference.
      return this;
    } else {
      // A case that typeReference shall be substituted with an actualParameter.
      const actualParameter = cloneDeep(parameterMapping.actualParameter);
      if (actualParameter instanceof TypeReference) {
        const expandedType = cloneDeep(cloneDeep(actualParameter).expand(modules, []));
        if (isEqual(expandedType, actualParameter)) {
          // actualParameter.reference = this.toString();
          return actualParameter;
        }
        expandedType.reference = actualParameter.toString();
        return expandedType;
      }
      return unimpl(actualParameter.constructor.name);
    }
    throw Error();
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
      this.constraint = constraint;
    } else {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_REFERENCE] = this.reference || this.toString();
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
