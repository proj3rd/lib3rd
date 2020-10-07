import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
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

import { Modules } from './modules';
import { ObjectClass } from './objectClass';

export class ObjectClassAssignment {
  public name: string;
  public objectClass: ObjectClass;

  private objectClassAssignmentTag: undefined;

  constructor(name: string, objectClass: ObjectClass) {
    this.name = name;
    this.objectClass = objectClass;
  }

  /**
   * Expand `objectClass` property. This will mutate the object itself.
   * @param modules
   */
  public expand(modules: Modules): ObjectClassAssignment {
    const expandedType = cloneDeep(this.objectClass).expand(modules, []);
    if (!isEqual(expandedType, this.objectClass)) {
      this.objectClass = expandedType;
    }
    return this;
  }

  public getDepth(): number {
    return this.objectClass.getDepth();
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    const sheetname = uniqueSheetname(wb, this.name);
    const ws = addWorksheet(wb, sheetname, 3);
    const depth = this.getDepth();
    addTitle(ws, this.name);
    ws.addRow([]);
    addHeader(ws, HEADER_LIST, depth);
    this.objectClass.toSpreadsheet(
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
    return `${this.name} ::= ${this.objectClass.toString()}`;
  }
}
