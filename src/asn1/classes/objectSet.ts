import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from '../../utils/unimpl';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import {
  appendInColumn,
  HEADER_NAME_BASE,
  HEADER_REFERENCE,
  HEADER_TYPE,
} from '../formatter/spreadsheet';
import { ElementSetSpecs, ElementSetSpecsFromObject } from '../types/elementSetSpecs';
import { Modules } from './modules';

/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export class ObjectSet {
  public objectSetSpec: ElementSetSpecs;

  public reference: string | undefined;

  public objectSetTag = true;

  constructor(objectSetSpec: ElementSetSpecs) {
    this.objectSetSpec = objectSetSpec;
  }

  public static fromObject(obj: unknown): ObjectSet {
    const {
      objectSetSpec: objectSetSpecObj,
      reference: referenceObj,
      objectSetTag,
    } = obj as ObjectSet;
    if (!objectSetTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (referenceObj && typeof referenceObj !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const objectSetSpec = ElementSetSpecsFromObject(objectSetSpecObj);
    const objectSet = new ObjectSet(objectSetSpec);
    objectSet.reference = referenceObj;
    return objectSet;
  }

  /**
   * Expand `objectSetSpec` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): ObjectSet {
    if (parameterMappings.length) {
      return unimpl();
    }
    this.objectSetSpec = this.objectSetSpec.map((elementSetSpec) => {
      const expandedType = cloneDeep(elementSetSpec).expand(
        modules,
        parameterMappings,
      );
      if (isEqual(expandedType, elementSetSpec)) {
        return elementSetSpec;
      }
      return expandedType;
    });
    return this;
  }

  public getDepth(): number {
    return this.objectSetSpec.reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    if (this.objectSetSpec.length === 0) {
      appendInColumn(row, HEADER_TYPE, '{}');
      const r = worksheet.addRow(row);
      setOutlineLevel(r, depth);
      drawBorder(worksheet, r, depth);
      return;
    }
    appendInColumn(row, HEADER_TYPE, '{');
    const r1 = worksheet.addRow(row);
    setOutlineLevel(r1, depth);
    drawBorder(worksheet, r1, depth);
    this.objectSetSpec.forEach((elementSetSpec) => {
      elementSetSpec.toSpreadsheet(worksheet, {}, depth + 1);
    });
    const r2 = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: '}',
    });
    setOutlineLevel(r2, depth);
    drawBorder(worksheet, r2, depth);
  }

  public toString(): string {
    const innerString = this.objectSetSpec
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(',\n');
    const arrToString: string[] = ['{', indent(innerString), '}'];
    return arrToString.join('\n');
  }
}
