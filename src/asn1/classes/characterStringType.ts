import { Worksheet } from 'exceljs';
import { unimpl } from '../../utils/unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SizeConstraint } from './sizeConstraint';

export type CharacterStringTypeLiteral =
  | 'BMPString'
  | 'GeneralString'
  | 'GraphicString'
  | 'IA5String'
  | 'ISO646String'
  | 'NumericString'
  | 'PrintableString'
  | 'TeletexString'
  | 'T61String'
  | 'UniversalString'
  | 'UTF8String'
  | 'VideotexString'
  | 'VisibleString';

/**
 * X.680 clause 40
 * ```
 * characterStringTypeLiteral ( sizeConstraint )?
 * ```
 */
export class CharacterStringType {
  public characterStringTypeLiteral: CharacterStringTypeLiteral;
  public constraint: Constraint | undefined;

  public reference: string | undefined;

  public characterStringTypeTag = true;

  constructor(characterStringTypeLiteral: CharacterStringTypeLiteral) {
    this.characterStringTypeLiteral = characterStringTypeLiteral;
  }

  public static fromObject(obj: unknown) {
    const {
      characterStringTypeLiteral: characterStringTypeLiteralObject,
      constraint: constraintObject,
      reference: referenceObject,
      characterStringTypeTag,
    } = obj as CharacterStringType;
    if (!characterStringTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!characterStringTypeLiteralObject
        || typeof characterStringTypeLiteralObject !== 'string'
    ) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraint = constraintObject ? Constraint.fromObject(constraintObject) : undefined;
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const octetStringType = new CharacterStringType(characterStringTypeLiteralObject);
    octetStringType.constraint = constraint;
    octetStringType.reference = referenceObject;
    return octetStringType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): CharacterStringType {
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
      return;
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
      return this.characterStringTypeLiteral;
    }
    return `${this.characterStringTypeLiteral} ${this.constraint.toString()}`;
  }
}
