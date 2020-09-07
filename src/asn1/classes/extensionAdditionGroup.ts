import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import {
  drawBorder,
  HEADER_NAME_BASE,
  headerIndexed,
  IRowInput,
} from '../formatter/spreadsheet';
import { ComponentType } from './componentType';
import { Modules } from './modules';
import { toStringWithComma } from './sequenceType';

export class ExtensionAdditionGroup {
  public version: number | undefined;
  public components: ComponentType[];

  private extensionAdditionGroupTag: undefined;

  constructor(version: number | undefined, components: ComponentType[]) {
    this.version = version;
    this.components = components;
  }

  /**
   * Expand `components` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ExtensionAdditionGroup {
    this.components = this.components.map((component) => {
      const expandedComponent = cloneDeep(component).expand(
        modules,
        parameterMappings
      );
      if (isEqual(expandedComponent, component)) {
        return component;
      }
      return expandedComponent;
    });
    return this;
  }

  public getDepth(): number {
    return this.components.reduce((prev, curr) => {
      return Math.max(prev, curr.getDepth() + 1);
    }, 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    let r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.openingBracket(),
    });
    drawBorder(worksheet, r, depth);
    this.components.forEach((component) => {
      component.toSpreadsheet(worksheet, {}, depth + 1);
    });
    r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: ']]',
    });
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.components.length === 0) {
      const arrToStringEmpty = ['[['];
      if (this.version !== undefined) {
        arrToStringEmpty.push(this.version.toString());
      }
      arrToStringEmpty.push(']]');
      return arrToStringEmpty.join(' ');
    }
    const arrToString: string[] = [];
    if (this.version !== undefined) {
      arrToString.push(`[[ ${this.version.toString()}`);
    } else {
      arrToString.push('[[');
    }
    const componentsString = this.components
      .map((component, index) => {
        return toStringWithComma(
          component,
          index !== this.components.length - 1
        );
      })
      .join('\n');
    arrToString.push(indent(componentsString));
    arrToString.push(']]');
    return arrToString.join('\n');
  }

  private openingBracket(): string {
    if (this.version === undefined) {
      return '[[';
    }
    return `[[ ${this.version.toString()}`;
  }
}
