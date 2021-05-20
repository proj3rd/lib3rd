import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_NAME_BASE, HEADER_TYPE } from '../formatter/spreadsheet';
import { drawBorder, headerIndexed, IRowInput, setOutlineLevel } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { NullType } from './nullType';

export class SequenceOfType {
  /**
   * @property {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
   */
  public baseType: AsnType | NamedType | ObjectSet;
  public constraint: Constraint | undefined;

  public reference: string | undefined;

  public sequenceOfTypeTag = true;

  constructor(
    baseType: AsnType | NamedType,
    constraint: Constraint | undefined,
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  public static fromObject(obj: unknown): SequenceOfType {
    const {
      baseType: baseTypeObj,
      constraint: constraintObj,
      reference: referenceObj,
      sequenceOfTypeTag,
    } = obj as SequenceOfType;
    if (!sequenceOfTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    let baseType: AsnType | NamedType | ObjectSet | undefined = undefined;
    try {
      baseType = AsnTypeFromObject(baseTypeObj);
    } catch (e) {} finally {}
    const { namedTypeTag } = baseTypeObj as NamedType;
    if (namedTypeTag) {
      baseType = NamedType.fromObject(baseTypeObj);
    }
    const { objectSetTag } = baseTypeObj as ObjectSet;
    if (objectSetTag) {
      baseType = ObjectSet.fromObject(baseTypeObj);
    }
    if (baseType === undefined) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraint = constraintObj !== undefined ? Constraint.fromObject(constraintObj) : undefined;
    if (referenceObj && typeof referenceObj !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const sequenceOfType = new SequenceOfType(new NullType(), constraint); // new NullType() is WA
    sequenceOfType.baseType = baseType;
    sequenceOfType.reference = referenceObj;
    return sequenceOfType;
  }

  /**
   * Expand `baseType` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): SequenceOfType {
    const expandedBaseType = cloneDeep(this.baseType).expand(
      modules,
      parameterMappings,
    );
    if (!isEqual(expandedBaseType, this.baseType)) {
      this.baseType = expandedBaseType;
    }
    if (this.constraint !== undefined) {
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

  public getDepth(): number {
    return this.baseType.getDepth();
  }

  // eslint-disable-next-line class-methods-use-this
  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    appendInColumn(row, HEADER_TYPE, this.stringPrefix());
    if (!(this.baseType instanceof NamedType) && this.baseType.reference) {
      appendInColumn(row, HEADER_TYPE, this.baseType.reference);
    }
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
    const name =
      this.baseType instanceof NamedType
        ? 'item'
        : this.baseType.reference ?? 'item';
    this.baseType.toSpreadsheet(worksheet, {
      [headerIndexed(HEADER_NAME_BASE, depth + 1)]: name,
    }, depth + 1);
  }

  public toString(): string {
    return `${this.stringPrefix()} ${this.baseType.toString()}`;
  }

  private stringPrefix(): string {
    if (this.constraint === undefined) {
      return 'SEQUENCE OF';
    }
    return `SEQUENCE ${this.constraint.toString()} OF`;
  }
}
