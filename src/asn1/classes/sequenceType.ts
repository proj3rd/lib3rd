import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
import { ComponentType } from './componentType';
import { Constraint } from './constraint';
import { ExtensionAdditionGroup } from './extensionAdditionGroup';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';

/**
 * This is a comma placeholder for a sequence component.
 * `ComponentType.toString()` will put this placeholder for the item.
 * `SequenceType` and `ExtensionAdditionGroup` will replace with with either
 * ',' or '' (empty) based on its position in a sequence by using
 * `toStringWithComma()`.
 */
export const _COMMA = '_COMMA_';

export function toStringWithComma(
  component: RootSequenceComponents,
  shouldInsert: boolean
): string {
  const componentString = component.toString();
  const charToInsert = shouldInsert ? ',' : '';
  if (component instanceof ComponentType) {
    return componentString.replace(_COMMA, charToInsert);
  } else if (component instanceof ExtensionAdditionGroup) {
    return `${componentString}${charToInsert}`;
  } else if (component instanceof ExtensionMarker) {
    return `${componentString}${charToInsert}`;
  } else {
    return unimpl();
  }
}

export class SequenceType {
  public components: RootSequenceComponents[];

  constructor(components: RootSequenceComponents[]) {
    this.components = components;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): SequenceType {
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

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = 'SEQUENCE';
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
    this.components.forEach((component) => {
      component.toSpreadsheet(worksheet, {}, depth + 1);
    });
  }

  public toString(): string {
    if (this.components.length === 0) {
      return 'SEQUENCE {}';
    }
    const arrToString = ['SEQUENCE {'];
    const componentsString = this.components
      .map((component, index) => {
        return toStringWithComma(
          component,
          index !== this.components.length - 1
        );
      })
      .join('\n');
    arrToString.push(indent(componentsString));
    arrToString.push('}');
    return arrToString.join('\n');
  }
}

export type RootSequenceComponents =
  | ComponentType
  | ExtensionMarker
  | ExtensionAdditionGroup;

export type ExtensionAddition = ComponentType | ExtensionAdditionGroup;

export type Tag = string;
