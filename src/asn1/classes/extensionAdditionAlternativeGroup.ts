import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import {
  HEADER_NAME_BASE,
  headerIndexed,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
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

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ExtensionAdditionAlternativeGroup {
    this.components.forEach((component, index) => {
      const expandedComponent = component.expand(modules, parameterMappings);
      this.components[index] = expandedComponent;
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
