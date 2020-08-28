import { Worksheet } from 'exceljs';
import { unreach } from 'unimpl';
import { indent } from '../formatter';
import {
  HEADER_NAME_BASE,
  HEADER_REFERENCE,
  headerIndexed,
  IRowInput,
} from '../formatter/spreadsheet';
import { ObjectIdComponents } from '../types';
import { OctetStringType } from './octetStringType';

/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
export class ObjectIdentifierValue {
  public objectIdComponentsList: ObjectIdComponents[];

  private objectIdentifierValueTag: undefined;

  private compoundComponentList: string[] = [
    // 36413-g00
    'INITIATING MESSAGE',
    'SUCCESSFUL OUTCOME',
    'UNSUCCESSFUL OUTCOME',
    'PROCEDURE CODE',
    'FIRST CRITICALITY',
    'FIRST TYPE',
    'SECOND CRITICALITY',
    'SECOND TYPE',
  ];

  constructor(objectIdComponentsList: ObjectIdComponents[]) {
    this.objectIdComponentsList = this.compoundComponent(
      objectIdComponentsList
    );
  }

  public getDepth(): number {
    return this.objectIdComponentsList.reduce((prev, curr) => {
      const depthCurr = typeof curr === 'string' ? 0 : curr.getDepth();
      return Math.max(prev, depthCurr + 1);
    }, 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.objectIdComponentsList.length === 1) {
      unreach();
    }
    this.objectIdComponentsList.forEach((components, index) => {
      if (index % 2 !== 0) {
        return;
      }
      if (typeof components !== 'string') {
        unreach(components);
      }
      const componentsNext = this.objectIdComponentsList[index + 1];
      if (componentsNext === undefined) {
        worksheet.addRow({
          [headerIndexed(HEADER_NAME_BASE, depth)]: components,
        });
      } else {
        if (
          typeof componentsNext !== 'string' &&
          !(componentsNext instanceof OctetStringType)
        ) {
          unreach(componentsNext);
        }
        worksheet.addRow({
          [headerIndexed(HEADER_NAME_BASE, depth)]: components,
          [HEADER_REFERENCE]: componentsNext,
        });
      }
    });
  }

  /** TODO
   * Need to improve formatting for RAN3 procedure definitions.
   * Branching by the length is a workaround and not ideal.
   */
  public toString(): string {
    if (this.objectIdComponentsList.length === 1) {
      return `{${this.objectIdComponentsList[0].toString()}}`;
    }
    const arrToString: string[] = ['{'];
    this.objectIdComponentsList.forEach((component, index) => {
      if (index % 2 !== 0) {
        return;
      }
      const componentNext = this.objectIdComponentsList[index + 1];
      if (componentNext === undefined) {
        arrToString.push(indent(component.toString()));
        return;
      }
      arrToString.push(
        indent(`${component.toString()}    ${componentNext.toString()}`)
      );
    });
    arrToString.push('}');
    return arrToString.join('\n');
  }

  private compoundComponent(
    objectIdComponentsList: ObjectIdComponents[]
  ): ObjectIdComponents[] {
    const objectIdComponentsListOut: ObjectIdComponents[] = [];
    const { length } = objectIdComponentsList;
    for (let i = 0; i < length; ) {
      const firstComponent = objectIdComponentsList[i];
      if (typeof firstComponent !== 'string') {
        objectIdComponentsListOut.push(firstComponent);
        i++;
        continue;
      }
      // Make the longest word matching one of compound component list
      const tempStringList: string[] = [firstComponent];
      for (let j = i + 1; j < length; j++) {
        const latestComponent = tempStringList.join(' ');
        const component = objectIdComponentsList[j];
        if (typeof component !== 'string') {
          objectIdComponentsListOut.push(latestComponent);
          tempStringList.length = 0;
          i = j;
          break;
        }
        tempStringList.push(component);
        const newComponent = tempStringList.join(' ');
        if (
          this.compoundComponentList.find((compound) => {
            return compound.startsWith(newComponent);
          }) === undefined
        ) {
          objectIdComponentsListOut.push(latestComponent);
          tempStringList.length = 0;
          i = j;
          break;
        }
        if (
          this.compoundComponentList.find((compound) => {
            return compound === newComponent;
          }) !== undefined
        ) {
          objectIdComponentsListOut.push(newComponent);
          tempStringList.length = 0;
          i = j + 1;
          break;
        }
      }
      if (tempStringList.length) {
        objectIdComponentsListOut.push(tempStringList.join(' '));
        i++;
      }
    }
    return objectIdComponentsListOut;
  }
}
