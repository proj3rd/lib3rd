import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { headerIndexed, IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';

import { AsnType } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

export class NamedType {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;

  private namedTypeTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding NamedType',
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
