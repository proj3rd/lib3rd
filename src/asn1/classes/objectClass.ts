import { Worksheet } from 'exceljs';
import { cloneDeep } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { FieldSpec, FieldSpecFromObject } from '../types/fieldSpec';
import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Modules } from './modules';
import { Syntax } from './syntax';
import { TypeFieldSpec } from './typeFieldSpec';

/**
 * X.681 clause 9.3
 * ```
 * CLASS { fieldSpec[0], ..., fieldSpec[n-1] } WITH SYNTAX { syntax[0] ... syntax[n-1] }
 * ```
 */
export class ObjectClassDefinition {
  public fieldSpecs: FieldSpec[];
  public syntaxList: Syntax[];

  public reference: string | undefined;

  public objectClassDefinitionTag = true;

  constructor(fieldSpecs: FieldSpec[], syntaxList: Syntax[]) {
    this.fieldSpecs = fieldSpecs;
    this.syntaxList = syntaxList;
  }

  public static fromObject(obj: unknown): ObjectClassDefinition {
    const {
      fieldSpecs: fieldSpecsObject,
      syntaxList: syntaxListObject,
      reference: referenceObject,
      objectClassDefinitionTag,
    } = obj as ObjectClassDefinition;
    if (!objectClassDefinitionTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(fieldSpecsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(syntaxListObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const fieldSpecs = fieldSpecsObject.map((item) => FieldSpecFromObject(item));
    const syntaxList = syntaxListObject.map((item) => Syntax.fromObject(item));
    const objectClassDefinition = new ObjectClassDefinition(fieldSpecs, syntaxList);
    objectClassDefinition.reference = referenceObject;
    return objectClassDefinition;
  }

  /**
   * Expand `fieldSpecs` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): ObjectClassDefinition {
    if (parameterMappings.length) {
      return unimpl();
    }
    this.fieldSpecs = this.fieldSpecs
      .map((fieldSpec) => cloneDeep(fieldSpec).expand(modules, parameterMappings));
    return this;
  }

  public getDepth(): number {
    const depthFieldSpecs = this.fieldSpecs
      .reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
    const depthSyntaxList = this.syntaxList
      .reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
    return Math.max(depthFieldSpecs, depthSyntaxList);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    appendInColumn(row, HEADER_TYPE, 'CLASS');
    const r1 = worksheet.addRow(row);
    setOutlineLevel(r1, depth);
    drawBorder(worksheet, r1, depth);
    this.fieldSpecs.forEach((fieldSpec) => {
      fieldSpec.toSpreadsheet(worksheet, {}, depth + 1);
    });
    if (this.syntaxList.length > 0) {
      const r2 = worksheet.addRow({
        [HEADER_TYPE]: 'WITH SYNTAX',
      });
      setOutlineLevel(r2, depth);
      drawBorder(worksheet, r2, depth);
      this.syntaxList.forEach((syntax) => {
        syntax.toSpreadsheet(worksheet, {}, depth + 1);
      });
    }
  }

  public toString(): string {
    const arrToString: string[] = [
      'CLASS {',
      indent(
        this.fieldSpecs.map((fieldSpec) => fieldSpec.toString()).join(',\n'),
      ),
      '}',
    ];
    if (this.syntaxList.length > 0) {
      arrToString.push('WITH SYNTAX {');
      arrToString.push(
        indent(this.syntaxList.map((syntax) => syntax.toString()).join('\n')),
      );
      arrToString.push('}');
    }
    return arrToString.join('\n');
  }
}

export type ObjectClass = ObjectClassDefinition;
