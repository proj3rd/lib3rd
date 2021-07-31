import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl, unreach } from 'unimpl';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';
import { Intersections, IntersectionsFromObject } from '../types/intersections';
import { BooleanValue } from './booleanValue';
import { ExternalObjectSetReference } from './externalObjectSetReference';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { ObjectSetReference } from './objectSetReference';
import { SizeConstraint } from './sizeConstraint';
import { ValueRange } from './valueRange';
import { ValueReference } from './valueReference';

export class Unions {
  public intersectionsList: Intersections[];

  public unionsTag = true;

  constructor(intersections: Intersections[]) {
    this.intersectionsList = intersections;
  }

  public static fromObject(obj: unknown): Unions {
    const { intersectionsList: intersectionsListObject, unionsTag } = obj as Unions;
    if (!unionsTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(intersectionsListObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const intersectionList = intersectionsListObject.map((item) => IntersectionsFromObject(item));
    return new Unions(intersectionList);
  }

  /**
   * Expand `intersectionsList` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): Unions {
    this.intersectionsList = this.intersectionsList.map(
      (intersections) => intersections.map((elements) => {
        if (typeof elements === 'string') {
          return elements;
        }
        const expandedType = cloneDeep(elements).expand(
          modules,
          parameterMappings,
        );
        if (isEqual(expandedType, elements)) {
          return elements;
        }
        if (expandedType instanceof ObjectSet) {
          return unimpl();
        }
        return expandedType;
      }),
    );
    return this;
  }

  public getDepth(): number {
    return this.intersectionsList.reduce((prev1, curr1) => {
      const depthIntersections = curr1.reduce((prev2, curr2) => {
        const depthCurr = typeof curr2 === 'string' ? 0 : curr2.getDepth();
        return Math.max(prev2, depthCurr);
      }, 0);
      return Math.max(prev1, depthIntersections);
    }, 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const { length: lengthUnions } = this.intersectionsList;
    this.intersectionsList.forEach((intersections, indexUnions) => {
      const { length: lengthIntersections } = intersections;
      intersections.forEach((elements, indexIntersections) => {
        if (typeof elements === 'string') {
          const r = worksheet.addRow({
            [headerIndexed(HEADER_NAME_BASE, depth)]: elements,
          });
          setOutlineLevel(r, depth);
          drawBorder(worksheet, r, depth);
        } else if (elements instanceof BooleanValue) {
          unreach(elements);
        } else if (elements instanceof ExternalObjectSetReference) {
          unreach(elements);
        } else if (elements instanceof IntegerValue) {
          unreach(elements);
        } else if (elements instanceof ObjectSetReference) {
          unreach(elements);
        } else if (elements instanceof SizeConstraint) {
          unreach(elements);
        } else if (elements instanceof ValueRange) {
          unreach(elements);
        } else if (elements instanceof ValueReference) {
          unreach(elements);
        } else {
          elements.toSpreadsheet(worksheet, {}, depth);
        }
        if (indexIntersections !== lengthIntersections - 1) {
          const r = worksheet.addRow({
            [headerIndexed(HEADER_NAME_BASE, depth)]: '∩',
          });
          setOutlineLevel(r, depth);
          drawBorder(worksheet, r, depth);
        }
      });
      if (indexUnions !== lengthUnions - 1) {
        const r = worksheet.addRow({
          [headerIndexed(HEADER_NAME_BASE, depth)]: '∪',
        });
        setOutlineLevel(r, depth);
        drawBorder(worksheet, r, depth);
      }
    });
  }

  public toString(): string {
    return this.intersectionsList
      .map((intersections) => intersections.toString())
      .join(' |\n');
  }
}
