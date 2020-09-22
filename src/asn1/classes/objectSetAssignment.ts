import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import {
  addHeader,
  addTitle,
  addWorksheet,
  getWorkbook,
  headerIndexed,
  uniqueSheetname,
} from '../../common/spreadsheet';
import { BorderTop } from '../../common/spreadsheet/style';
import { HEADER_LIST, HEADER_NAME_BASE } from '../formatter/spreadsheet';
import { drawBorder } from '../../common/spreadsheet';
import { DefinedObjectClass } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
export class ObjectSetAssignment {
  public name: string;
  public definedObjectClass: DefinedObjectClass;
  public objectSet: ObjectSet;

  private objectSetAssignmentTag: undefined;

  constructor(
    name: string,
    definedObjectClass: DefinedObjectClass,
    objectSet: ObjectSet
  ) {
    this.name = name;
    this.definedObjectClass = definedObjectClass;
    this.objectSet = objectSet;
  }

  /**
   * Expand `objectSet` property. This will mutate the object itself.
   * @param modules
   */
  public expand(modules: Modules): ObjectSetAssignment {
    const expandedType = cloneDeep(this.objectSet).expand(modules, []);
    if (!isEqual(expandedType, this.objectSet)) {
      this.objectSet = expandedType;
    }
    return this;
  }

  public getDepth(): number {
    return this.objectSet.getDepth();
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    const sheetname = uniqueSheetname(wb, this.fullName());
    const ws = addWorksheet(wb, sheetname, 3);
    const depth = this.getDepth();
    addTitle(ws, this.name);
    ws.addRow([]);
    addHeader(ws, HEADER_LIST, depth);
    this.objectSet.toSpreadsheet(
      ws,
      {
        [headerIndexed(HEADER_NAME_BASE, 0)]: this.fullName(),
      },
      0
    );
    drawBorder(ws, ws.addRow([]), 0, BorderTop);
    return wb;
  }

  public toString(): string {
    return `${this.fullName()} ::= ${this.objectSet.toString()}`;
  }

  private fullName(): string {
    return `${this.name} ${this.definedObjectClass.toString()}`;
  }
}