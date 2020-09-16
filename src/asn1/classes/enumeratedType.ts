import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { setOutlineLevel } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_TYPE } from '../formatter/spreadsheet';
import { IRowInput } from '../../common/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';

export class EnumeratedType {
  public items: EnumerationItem[];

  private enumeratedTypeTag: undefined;

  constructor(items: EnumerationItem[]) {
    this.items = items;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): EnumeratedType {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = this.toString();
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    const arrToString: string[] = [
      'ENUMERATED {',
      this.items.map((item) => item.toString()).join(', '),
      '}',
    ];
    return arrToString.join('');
  }
}

export type EnumerationItem = string | ExtensionMarker;
