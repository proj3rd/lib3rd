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
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { HEADER_LIST, HEADER_NAME_BASE } from '../formatter/spreadsheet';

import { Modules } from './modules';
import { ObjectClass, ObjectClassDefinition } from './objectClass';

export class ObjectClassAssignment {
  public name: string;
  public objectClass: ObjectClass;

  public objectClassAssignmentTag = true;

  constructor(name: string, objectClass: ObjectClass) {
    this.name = name;
    this.objectClass = objectClass;
  }

  public static fromObject(obj: unknown): ObjectClassAssignment {
    const {
      name: nameObject,
      objectClass: objectClassObject,
      objectClassAssignmentTag,
    } = obj as ObjectClassAssignment;
    if (!objectClassAssignmentTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof nameObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const objectClass = ObjectClassDefinition.fromObject(objectClassObject);
    return new ObjectClassAssignment(nameObject, objectClass);
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
