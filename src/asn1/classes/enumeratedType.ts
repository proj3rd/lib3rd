import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { EnumerationItem, EnumerationItemFromObject } from '../types/enumerationItem';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';

export class EnumeratedType {
  public items: EnumerationItem[];

  public reference: string | undefined;

  public enumeratedTypeTag = true;

  constructor(items: EnumerationItem[]) {
    this.items = items;
  }

  public static fromObject(obj: unknown): EnumeratedType {
    const { items: itemsObject, reference: referenceObject, enumeratedTypeTag } = obj as EnumeratedType;
    if (!enumeratedTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(itemsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (referenceObject && typeof referenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const items = itemsObject.map((item) => EnumerationItemFromObject(item));
    const enumeratedType = new EnumeratedType(items);
    enumeratedType.reference = referenceObject;
    return enumeratedType;
  }

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): EnumeratedType {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
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
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const arrToString: string[] = [
      'ENUMERATED {',
      this.items.map((item) => {
        if (typeof item === 'string' || item instanceof ExtensionMarker) {
          return item.toString();
        }
        return `${item.name} (${item.valueLiteral})`;
      }).join(', '),
      '}',
    ];
    return arrToString.join('');
  }
}
