import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { HEADER_TYPE } from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { ExtensionAdditionAlternativeGroup } from './extensionAdditionAlternativeGroup';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { NamedType } from './namedType';

export class ChoiceType {
  public components: RootChoiceComponents[];

  private choiceTypeTag: undefined;

  constructor(components: RootChoiceComponents[]) {
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
  ): ChoiceType {
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

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = 'CHOICE';
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
    this.components.forEach((component) => {
      component.toSpreadsheet(worksheet, {}, depth + 1);
    });
  }

  public toString(): string {
    if (this.components.length === 0) {
      return 'CHOICE {}';
    }
    const arrToString = ['CHOICE {'];
    const componentsString = this.components
      .map((component) => component.toString())
      .join(',\n');
    arrToString.push(indent(componentsString));
    arrToString.push('}');
    return arrToString.join('\n');
  }
}

export type RootChoiceComponents =
  | NamedType
  | ExtensionMarker
  | ExtensionAdditionAlternativeGroup;

export type ExtensionAdditionAlternative =
  | NamedType
  | ExtensionAdditionAlternativeGroup;
