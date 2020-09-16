import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { headerIndexed } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  HEADER_TAG,
} from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
import { Optionality } from './optionality';
import { _COMMA, Tag } from './sequenceType';

export class ComponentType {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;
  public optionality: Optionality | undefined;
  public tag: Tag;

  private componentTypeTag: undefined;

  constructor(
    namedType: NamedType,
    optionality: Optionality | undefined,
    tag: Tag
  ) {
    const { name, asnType } = namedType;
    this.name = name;
    this.asnType = asnType;
    this.optionality = optionality;
    this.tag = tag;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding ComponentType'
      );
    }
  }

  /**
   * Expand `asnType` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ComponentType {
    const expandedType = cloneDeep(this.asnType).expand(
      modules,
      parameterMappings
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
      depth
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
      arrToString.push(`${this.asnType.toString()}${_COMMA}`);
    } else if (this.optionality !== undefined) {
      arrToString.push(this.asnType.toString());
      arrToString.push(`${this.optionality.toString()}${_COMMA}`);
    }
    if (this.tag.length > 0) {
      arrToString.push(this.tag);
    }
    return arrToString.join('    ');
  }
}
