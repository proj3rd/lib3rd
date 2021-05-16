import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { todo, unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { Logger } from '../../logger';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { RootSequenceComponents, RootSequenceComponentsFromObject } from '../types/rootSequenceComponents';
import { ComponentType } from './componentType';
import { Constraint } from './constraint';
import { ExtensionAdditionGroup } from './extensionAdditionGroup';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { ObjectClassFieldType } from './objectClassFieldType';
import { ObjectSet } from './objectSet';
import { ObjectSetAssignment } from './objectSetAssignment';
import { TypeReference } from './typeReference';

const logger = Logger.getLogger('asn1.class.SequenceType');

/**
 * This is a comma placeholder for a sequence component.
 * `ComponentType.toString()` will put this placeholder for the item.
 * `SequenceType` and `ExtensionAdditionGroup` will replace with with either
 * ',' or '' (empty) based on its position in a sequence by using
 * `toStringWithComma()`.
 */
export const COMMA_PLACEHOLDER = '_COMMA_';

export function toStringWithComma(
  component: RootSequenceComponents,
  shouldInsert: boolean,
): string {
  const componentString = component.toString();
  const charToInsert = shouldInsert ? ',' : '';
  if (component instanceof ComponentType) {
    return componentString.replace(COMMA_PLACEHOLDER, charToInsert);
  } if (component instanceof ExtensionAdditionGroup) {
    return `${componentString}${charToInsert}`;
  } if (component instanceof ExtensionMarker) {
    return `${componentString}${charToInsert}`;
  }
  return unimpl();
}

export class SequenceType {
  public components: RootSequenceComponents[];

  public reference: string | undefined;

  public sequenceTypeTag = true;

  constructor(components: RootSequenceComponents[]) {
    this.components = components;
  }

  public static fromObject(obj: unknown): SequenceType{
    const {
      components: componentsObject,
      reference: referenceObject,
      sequenceTypeTag,
    } = obj as SequenceType;
    if (!sequenceTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(componentsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const components = componentsObject.map((item) => RootSequenceComponentsFromObject(item));
    const sequenceType = new SequenceType(components);
    sequenceType.reference = referenceObject;
    return sequenceType;
  }

  /**
   * Expand `components` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   * @returns Returns {@link SequenceType} of {@link ObjectSet}.
   * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): SequenceType | ObjectSet {
    logger.debug('expand()');
    const paramToInstantiate = this.parameterToInstantiate(parameterMappings);
    if (paramToInstantiate) {
      const { actualParameter } = paramToInstantiate;
      if (typeof actualParameter !== 'string') {
        return this.expandFallback(modules, parameterMappings);
      }
      const assignment = modules.findAssignment(actualParameter);
      if (assignment === undefined) {
        return unimpl();
      }
      if (!(assignment instanceof ObjectSetAssignment)) {
        return unimpl();
      }
      const objectSet = cloneDeep(assignment.objectSet);
      const expandedObjectSet = cloneDeep(cloneDeep(objectSet).expand(modules, []));
      if (isEqual(expandedObjectSet, objectSet)) {
        objectSet.reference = actualParameter;
        return objectSet;
      }
      expandedObjectSet.reference = actualParameter;
      return expandedObjectSet;
    }
    return this.expandFallback(modules, parameterMappings);
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
    appendInColumn(row, HEADER_TYPE, 'SEQUENCE');
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
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
      .map((component, index) => toStringWithComma(
        component,
        index !== this.components.length - 1,
      ))
      .join('\n');
    arrToString.push(indent(componentsString));
    arrToString.push('}');
    return arrToString.join('\n');
  }

  private expandFallback(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): SequenceType {
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

  private parameterToInstantiate(
    parameterMappings: IParameterMapping[],
  ): IParameterMapping | undefined {
    return parameterMappings.find((paramMap) => {
      const { parameter } = paramMap;
      const { paramGovernor } = parameter;
      if (!(paramGovernor instanceof TypeReference)) {
        return false;
      }
      const component = this.components.find((compo) => {
        if (compo instanceof ComponentType) {
          const { asnType } = compo;
          if (!(asnType instanceof ObjectClassFieldType)) {
            return false;
          }
          const { definedObjectClass } = asnType;
          const { objectClassReference } = definedObjectClass;
          if (paramGovernor.typeReference === objectClassReference) {
            return true;
          }
        }
        return todo('ExtensionAdditionGroup');
      });
      return component !== undefined;
    });
  }
}

export type ExtensionAddition = ComponentType | ExtensionAdditionGroup;

export type Tag = string;
