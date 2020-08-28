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
import { Parameter } from './parameter';

export class ParameterizedTypeAssignment {
  public name: string;
  public parameters: Parameter[];
  public asnType: AsnType;

  private parameterizedTypeAssignmentTag: undefined;

  constructor(name: string, parameters: Parameter[], asnType: AsnType) {
    this.name = name;
    this.parameters = parameters;
    this.asnType = asnType;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ParameterizedTypeAssignment {
    const parameterMappingsNew: IParameterMapping[] = this.parameters.map(
      (parameter) => {
        return {
          actualParameter: undefined,
          parameter,
        };
      }
    );
    const expandedType = this.asnType.expand(modules, parameterMappingsNew);
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
    addTitle(ws, `${this.name} ${this.parameterString()}`);
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
    return `${
      this.name
    } ${this.parameterString()} ::= ${this.asnType.toString()}`;
  }

  private parameterString(): string {
    const parametersString = this.parameters
      .map((parameter) => parameter.toString())
      .join(', ');
    return `{${parametersString}}`;
  }
}
