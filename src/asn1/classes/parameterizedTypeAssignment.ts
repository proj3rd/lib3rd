import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
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
import { ObjectSet } from './objectSet';
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

  /**
   * Expand `asnType` property. This will mutate the object itself.
   * @param modules
   */
  public expand(modules: Modules): ParameterizedTypeAssignment {
    const parameterMappings: IParameterMapping[] = this.parameters.map(
      (parameter) => {
        return {
          parameter,
          actualParameter: undefined,
        };
      }
    );
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
