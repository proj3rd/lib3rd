import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';

import { Modules } from './modules';
import { NamedType } from './namedType';

export class ExtensionAdditionAlternativeGroup {
  public version: number | undefined;
  public components: NamedType[];

  private extensionAdditionAlternativeGroupTag: undefined;

  constructor(version: number | undefined, components: NamedType[]) {
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
    parameterMappings: IParameterMapping[],
  ): ExtensionAdditionAlternativeGroup {
    this.components = this.components.map((component) => {
      const expandedComponent = cloneDeep(component).expand(
        modules,
        parameterMappings,
      );
      if (isEqual(expandedComponent, component)) {
        return component;
      }
      return expandedComponent;
    });
    return this;
  }

  public getDepth(): number {
    return this.components.reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const r1 = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.openingBracket(),
    });
    setOutlineLevel(r1, depth);
    drawBorder(worksheet, r1, depth);
    this.components.forEach((component) => {
      component.toSpreadsheet(worksheet, {}, depth + 1);
    });
    const r2 = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: ']]',
    });
    setOutlineLevel(r2, depth);
    drawBorder(worksheet, r2, depth);
  }

  public toString(): string {
    if (this.components.length === 0) {
      const arrToStringEmpty = [this.openingBracket()];
      arrToStringEmpty.push(']]');
      return arrToStringEmpty.join(' ');
    }
    const arrToString: string[] = [];
    arrToString.push(this.openingBracket());
    const componentsString = this.components
      .map((component) => component.toString())
      .join(',\n');
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
