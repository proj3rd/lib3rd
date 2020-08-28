import { Workbook } from 'exceljs';
import { IParameterMapping } from '../expander';
import { addWorksheet, getWorkbook } from '../formatter';
import {
  addHeader,
  addTitle,
  drawBorder,
  HEADER_NAME_BASE,
  headerIndexed,
  uniqueSheetname,
} from '../formatter/spreadsheet';
import { BorderTop } from '../formatter/style';
import { AsnType } from './asnType';
import { Modules } from './modules';

export class TypeAssignment {
  public name: string;
  public asnType: AsnType;

  private typeAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): TypeAssignment {
    const expandedType = this.asnType.expand(modules, parameterMappings);
    if (expandedType !== undefined) {
      this.asnType = expandedType;
    }
    return this;
  }

  public getDepth(): number {
    return this.asnType.getDepth();
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    const sheetname = uniqueSheetname(wb, this.name);
    const ws = addWorksheet(wb, sheetname);
    const depth = this.getDepth();
    addTitle(ws, this.name);
    ws.addRow([]);
    addHeader(ws, depth);
    this.asnType.toSpreadsheet(
      ws,
      {
        [headerIndexed(HEADER_NAME_BASE, 0)]: this.name,
      },
      0
    );
    drawBorder(ws, ws.addRow([]), 0, BorderTop);
    return wb;
  }

  public toString(): string {
    return `${this.name} ::= ${this.asnType.toString()}`;
  }
}
