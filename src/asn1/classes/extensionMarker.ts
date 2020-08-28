import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import {
  HEADER_NAME_BASE,
  headerIndexed,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { Modules } from './modules';

export class ExtensionMarker {
  public static getInstance() {
    return ExtensionMarker.instance;
  }

  private static instance: ExtensionMarker = new ExtensionMarker();

  private extensionMarkerTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ExtensionMarker {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.toString(),
    });
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return '...';
  }
}
