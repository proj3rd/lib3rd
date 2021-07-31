import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';

import { ComponentType } from './componentType';
import { Modules } from './modules';
import { toStringWithComma } from './sequenceType';

export class ExtensionAdditionGroup {
  public version: number | undefined;
  public components: ComponentType[];

  public extensionAdditionGroupTag = true;

  constructor(version: number | undefined, components: ComponentType[]) {
    this.version = version;
    this.components = components;
  }

  public static fromObject(obj: unknown): ExtensionAdditionGroup {
    const { version, components: componentsObject, extensionAdditionGroupTag } = obj as ExtensionAdditionGroup;
    if (!extensionAdditionGroupTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (version !== undefined && typeof version !== 'number') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(componentsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const components = componentsObject.map((item) => ComponentType.fromObject(item));
    return new ExtensionAdditionGroup(version, components);
  }

  /**
   * Expand `components` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): ExtensionAdditionGroup {
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
      .map((component, index) => toStringWithComma(
        component,
        index !== this.components.length - 1,
      ))
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
