import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { RootChoiceComponents, RootChoiceComponentsFromObject } from '../types/rootChoiceComponents';
import { Constraint } from './constraint';
import { ExtensionAdditionAlternativeGroup } from './extensionAdditionAlternativeGroup';
import { Modules } from './modules';
import { NamedType } from './namedType';

export class ChoiceType {
  public components: RootChoiceComponents[];

  public reference: string | undefined;

  public choiceTypeTag = true;

  constructor(components: RootChoiceComponents[]) {
    this.components = components;
  }

  public static fromObject(obj: unknown): ChoiceType {
    const {
      components: componentsObject,
      reference: referenceObject,
      choiceTypeTag,
    } = obj as ChoiceType;
    if (!choiceTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(componentsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const components = componentsObject.map((item) => RootChoiceComponentsFromObject(item));
    const choiceType = new ChoiceType(components);
    choiceType.reference = referenceObject;
    return choiceType;
  }

  /**
   * Expand `components` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): ChoiceType {
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

  // eslint-disable-next-line class-methods-use-this
  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    appendInColumn(row, HEADER_TYPE, 'CHOICE');
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

export type ExtensionAdditionAlternative =
  | NamedType
  | ExtensionAdditionAlternativeGroup;
