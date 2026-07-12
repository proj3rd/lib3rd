import { Worksheet } from 'exceljs';
import { todo } from '../../utils/unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_REFERENCE, HEADER_TYPE } from '../formatter/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';

export class ObjectIdentifierType {
  public objectIdentifierTypeTag = true;

  public reference: string | undefined;

  public static fromObject(obj: unknown) {
    const { reference, objectIdentifierTypeTag } = obj as ObjectIdentifierType;
    if (!objectIdentifierTypeTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (reference && typeof reference !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const objectIdentifierType = new ObjectIdentifierType();
    objectIdentifierType.reference = reference;
    return objectIdentifierType;
  }

  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectIdentifierType {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  // eslint-disable-next-line class-methods-use-this
  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      todo();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    if (this.reference && !row[HEADER_REFERENCE]) {
      // eslint-disable-next-line no-param-reassign
      row[HEADER_REFERENCE] = this.reference;
    }
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  // eslint-disable-next-line class-methods-use-this
  public toString(): string {
    return 'OBJECT IDENTIFIER';
  }
}
