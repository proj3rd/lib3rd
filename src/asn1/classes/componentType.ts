import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { option } from 'yargs';
import { headerIndexed, IRowInput } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  HEADER_TAG,
} from '../formatter/spreadsheet';
import { AsnType, AsnTypeFromObject } from '../types/asnType';

import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
import { Optionality } from './optionality';
import { COMMA_PLACEHOLDER, Tag } from './sequenceType';

export class ComponentType {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;
  public optionality: Optionality | undefined;
  public tag: Tag;

  public componentTypeTag = true;

  constructor(
    namedType: NamedType,
    optionality: Optionality | undefined,
    tag: Tag,
  ) {
    const { name, asnType } = namedType;
    this.name = name;
    this.asnType = asnType;
    this.optionality = optionality;
    this.tag = tag;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding ComponentType',
      );
    }
  }

  public static fromObject(obj: unknown): ComponentType {
    const {
      name,
      asnType: asnTypeObject,
      optionality: optionalityObject,
      tag,
      componentTypeTag,
    } = obj as ComponentType;
    if (!name || typeof name !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof tag !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const asnType = AsnTypeFromObject(asnTypeObject);
    const namedType = new NamedType(name, asnType);
    const optionality = optionalityObject ? Optionality.fromObject(optionalityObject) : undefined;
    return new ComponentType(namedType, optionality, tag);
  }

  /**
   * Expand `asnType` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): ComponentType {
    const expandedType = cloneDeep(this.asnType).expand(
      modules,
      parameterMappings,
    );
    if (expandedType instanceof ObjectSet) {
      return unimpl();
    }
    if (!isEqual(expandedType, this.asnType)) {
      this.asnType = expandedType;
    }
    return this;
  }
  public getDepth(): number {
    return this.asnType.getDepth();
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    this.asnType.toSpreadsheet(
      worksheet,
      {
        [headerIndexed(HEADER_NAME_BASE, depth)]: this.name,
        [HEADER_OPTIONAL]: this.optionality
          ? this.optionality.toString()
          : undefined,
        [HEADER_TAG]: this.tag.toString(),
      },
      depth,
    );
  }

  /**
   * This method will return a string with a comma placeholder.
   * And it is discouraged to call `ComponentType.toString()` outside of
   * `SequenceType` and `ExtensionAdditionGroup`.
   */
  public toString(): string {
    const arrToString = [this.name];
    if (this.optionality === undefined) {
      arrToString.push(`${this.asnType.toString()}${COMMA_PLACEHOLDER}`);
    } else if (this.optionality !== undefined) {
      arrToString.push(this.asnType.toString());
      arrToString.push(`${this.optionality.toString()}${COMMA_PLACEHOLDER}`);
    }
    if (this.tag.length > 0) {
      arrToString.push(this.tag);
    }
    return arrToString.join('    ');
  }
}
