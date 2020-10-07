import { Worksheet } from 'exceljs';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_NAME_BASE } from '../formatter/spreadsheet';
import { Modules } from './modules';

export class ExtensionMarker {
  public static getInstance() {
    return ExtensionMarker.instance;
  }

  private static instance: ExtensionMarker = new ExtensionMarker();

  private extensionMarkerTag: undefined;

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionMarker {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.toString(),
    });
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  // eslint-disable-next-line class-methods-use-this
  public toString(): string {
    return '...';
  }
}
