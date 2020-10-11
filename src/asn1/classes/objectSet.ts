import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import {
  appendInColumn,
  HEADER_NAME_BASE,
  HEADER_REFERENCE,
  HEADER_TYPE,
} from '../formatter/spreadsheet';

import { _ElementSetSpecs } from '../types';
import { Modules } from './modules';

/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export class ObjectSet {
  public objectSetSpec: _ElementSetSpecs;

  public reference: string | undefined;

  private objectSetTag: undefined;

  constructor(objectSetSpec: _ElementSetSpecs) {
    this.objectSetSpec = objectSetSpec;
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
