import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { drawBorder, HEADER_TYPE, IRowInput } from '../formatter/spreadsheet';
import { _ElementSetSpecs } from '../types';
import { Modules } from './modules';

/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export class ObjectSet {
  public objectSetSpec: _ElementSetSpecs;

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
    parameterMappings: IParameterMapping[]
  ): ObjectSet {
    if (parameterMappings.length) {
      return unimpl();
    }
    this.objectSetSpec = this.objectSetSpec.map((elementSetSpec, index) => {
      const expandedType = cloneDeep(elementSetSpec).expand(
        modules,
        parameterMappings
      );
      if (isEqual(expandedType, elementSetSpec)) {
        return elementSetSpec;
      }
      return expandedType;
    });
    return this;
  }

  public getDepth(): number {
    return this.objectSetSpec.reduce((prev, curr) => {
      return Math.max(prev, curr.getDepth() + 1);
    }, 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.objectSetSpec.length === 0) {
      row[HEADER_TYPE] = '{}';
      const r = worksheet.addRow(row);
      drawBorder(worksheet, r, depth);
      return;
    }
    this.objectSetSpec.forEach((elementSetSpec) => {
      elementSetSpec.toSpreadsheet(worksheet, {}, depth + 1);
    });
  }

  public toString(): string {
    const innerString = this.objectSetSpec
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(',\n');
    const arrToString: string[] = ['{', indent(innerString), '}'];
    return arrToString.join('\n');
  }
}
