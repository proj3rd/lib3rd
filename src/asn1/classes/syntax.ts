import { Worksheet } from 'exceljs';
import {
  headerIndexed, setOutlineLevel, IRowInput, drawBorder,
} from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  HEADER_REFERENCE,
} from '../formatter/spreadsheet';

import { PrimitiveFieldName } from './primitiveFieldName';

export class Syntax {
  public literal: string;
  public primitiveFieldName: PrimitiveFieldName;
  public optional: boolean;

  public syntaxTag = true;

  constructor(
    literal: string,
    primitiveFieldName: PrimitiveFieldName,
    optional: boolean,
  ) {
    this.literal = literal;
    this.primitiveFieldName = primitiveFieldName;
    this.optional = optional;
  }
  
  public static fromObject(obj: unknown): Syntax {
    const {
      literal: literalObj,
      primitiveFieldName: primitiveFieldNameObj,
      optional: optionalObj,
      syntaxTag,
    } = obj as Syntax;
    if (!syntaxTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof literalObj !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof optionalObj !== 'boolean') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const primitiveFieldName = PrimitiveFieldName.fromObject(obj);
    return new Syntax(literalObj, primitiveFieldName, optionalObj);
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    const r = worksheet.addRow({
      [headerIndexed(HEADER_NAME_BASE, depth)]: this.literal,
      [HEADER_REFERENCE]: this.primitiveFieldName.toString(),
      [HEADER_OPTIONAL]: this.optional ? 'OPTIONAL' : undefined,
    });
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    if (this.optional) {
      return `[${this.literal}    ${this.primitiveFieldName.toString()}]`;
    }
    return `${this.literal}    ${this.primitiveFieldName.toString()}`;
  }
}
