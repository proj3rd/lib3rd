import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import {
  addHeader,
  addTitle,
  addWorksheet,
  getWorkbook,
  headerIndexed,
  uniqueSheetname,
  drawBorder,
} from '../../common/spreadsheet';
import { BorderTop } from '../../common/spreadsheet/style';
import { HEADER_LIST, HEADER_NAME_BASE } from '../formatter/spreadsheet';

import { AsnType } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

export class TypeAssignment {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;

  private typeAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding TypeAssignment',
      );
    }
  }

  /**
   * Expand `asnTye` property. This will mutate the object itself.
   * @param modules
   */
  public expand(modules: Modules): TypeAssignment {
    const expandedType = cloneDeep(this.asnType).expand(modules, []);
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
    const ws = addWorksheet(wb, sheetname, 3);
    const depth = this.getDepth();
    addTitle(ws, this.name);
    ws.addRow([]);
    addHeader(ws, HEADER_LIST, depth);
    this.asnType.toSpreadsheet(
      ws,
      {
        [headerIndexed(HEADER_NAME_BASE, 0)]: this.name,
      },
      0,
    );
    drawBorder(ws, ws.addRow([]), 0, BorderTop);
    return wb;
  }

  public toString(): string {
    return `${this.name} ::= ${this.asnType.toString()}`;
  }
}
