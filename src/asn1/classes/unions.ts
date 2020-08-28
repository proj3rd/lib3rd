import { Worksheet } from 'exceljs';
import { unreach } from 'unimpl';
import {
  drawBorder,
  HEADER_NAME_BASE,
  headerIndexed,
  IRowInput,
} from '../formatter/spreadsheet';
import { _Intersections } from '../types';
import { BooleanValue } from './booleanValue';
import { ExternalObjectSetReference } from './externalObjectSetReference';
import { IntegerValue } from './integerValue';
import { ObjectSetReference } from './objectSetReference';
import { SizeConstraint } from './sizeConstraint';
import { ValueRange } from './valueRange';

export class Unions {
  public intersectionsList: _Intersections[];

  private unionsTag: undefined;

  constructor(intersections: _Intersections[]) {
    this.intersectionsList = intersections;
  }

  public getDepth(): number {
    return this.intersectionsList.reduce((prev, curr) => {
      const depthIntersections = curr.reduce((prev, curr) => {
        const depthCurr = typeof curr === 'string' ? 0 : curr.getDepth();
        return Math.max(prev, depthCurr);
      }, 0);
      return Math.max(prev, depthIntersections);
    }, 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const { length: lengthUnions } = this.intersectionsList;
    this.intersectionsList.forEach((intersections, indexUnions) => {
      const { length: lengthIntersections } = intersections;
      intersections.forEach((elements, indexIntersections) => {
        if (typeof elements === 'string') {
          const r = worksheet.addRow({
            [headerIndexed(HEADER_NAME_BASE, depth + 1)]: elements,
          });
          drawBorder(worksheet, r, depth + 1);
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
        } else {
          elements.toSpreadsheet(worksheet, {}, depth + 1);
        }
        if (indexIntersections !== lengthIntersections - 1) {
          const r = worksheet.addRow({
            [headerIndexed(HEADER_NAME_BASE, depth + 1)]: '∩',
          });
          drawBorder(worksheet, r, depth + 1);
        }
      });
      if (indexUnions !== lengthUnions - 1) {
        const r = worksheet.addRow({
          [headerIndexed(HEADER_NAME_BASE, depth + 1)]: '∪',
        });
        drawBorder(worksheet, r, depth + 1);
      }
    });
  }

  public toString(): string {
    return this.intersectionsList
      .map((intersections) => intersections.toString())
      .join(' |\n');
  }
}
