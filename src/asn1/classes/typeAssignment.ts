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
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { HEADER_LIST, HEADER_NAME_BASE } from '../formatter/spreadsheet';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

export class TypeAssignment {
  public name: string;
  public asnType: AsnType | ObjectSet /* applicable after expand */;

  public typeAssignmentTag = true;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
    if (asnType instanceof ObjectSet) {
      return unimpl(
        'ObjectSet cannot be used in instantiating but expanding TypeAssignment',
      );
    }
  }

  public static fromObject(obj: unknown): TypeAssignment {
    const { name: nameObject, asnType: asnTypeObject, typeAssignmentTag } = obj as TypeAssignment;
    if (!typeAssignmentTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!nameObject || typeof nameObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const asnType = AsnTypeFromObject(asnTypeObject);
    return new TypeAssignment(nameObject, asnType);
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
