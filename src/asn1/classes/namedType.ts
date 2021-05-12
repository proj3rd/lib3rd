import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { headerIndexed, IRowInput } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { Modules } from './modules';
import { NullType } from './nullType';
import { ObjectSet } from './objectSet';

export class NamedType {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;

  public namedTypeTag = true;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding NamedType',
      );
    }
  }

  public static fromObject(obj: unknown): NamedType {
    const { name: nameObject, asnType: asnTypeObject, namedTypeTag } = obj as NamedType;
    if (!namedTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof nameObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const { objectSetTag } = obj as ObjectSet;
    const asnType = objectSetTag ? ObjectSet.fromObject(asnTypeObject) : AsnTypeFromObject(asnTypeObject);
    const namedType = new NamedType(nameObject, new NullType()); // new NullType() is WA
    namedType.asnType = asnType;
    return namedType;
  }

  /**
   * Expand `asnType` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): NamedType {
    const expandedType = cloneDeep(this.asnType).expand(
      modules,
      parameterMappings,
    );
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
      },
      depth,
    );
  }

  public toString(): string {
    return `${this.name}    ${this.asnType.toString()}`;
  }
}
