import { Worksheet } from 'exceljs';
import { unimpl } from '../../utils/unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { SizeConstraint } from './sizeConstraint';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';

export class OctetStringType {
  public constraint: Constraint | undefined;

  public reference: string | undefined;

  public octetStringTypeTag = true;

  public static fromObject(obj: unknown) {
    const {
      constraint: constraintObject,
      reference: referenceObject,
      octetStringTypeTag,
    } = obj as OctetStringType;
    if (!octetStringTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraint = constraintObject ? Constraint.fromObject(constraintObject) : undefined;
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const octetStringType = new OctetStringType();
    octetStringType.constraint = constraint;
    octetStringType.reference = referenceObject;
    return octetStringType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): OctetStringType {
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
      this.constraint = constraint;
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      unimpl();
    } else if (constraintSpec instanceof ObjectSet) {
      unimpl();
    } else if (constraintSpec instanceof ComponentRelationConstraint) {
      unimpl();
    } else {
      if (constraintSpec.elementSetSpecList.length !== 1) {
        unimpl();
      }
      const elementSetSpec = constraintSpec.elementSetSpecList[0];
      if (elementSetSpec instanceof ExtensionMarker) {
        throw Error('Not implemented');
      }
      if (elementSetSpec.intersectionsList.length > 1) {
        unimpl();
      }
      const intersections = elementSetSpec.intersectionsList[0];
      if (intersections.length !== 1) {
        unimpl();
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
    if (this.constraint === undefined) {
      return 'OCTET STRING';
    }
    return `OCTET STRING ${this.constraint.toString()}`;
  }
}
