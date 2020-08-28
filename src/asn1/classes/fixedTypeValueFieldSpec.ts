import { Worksheet } from 'exceljs';
import {
  HEADER_NAME_BASE,
  HEADER_OPTIONAL,
  HEADER_UNIQUE,
  headerIndexed,
  IRowInput,
} from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';

export class FixedTypeValueFieldSpec {
  public fieldReference: PrimitiveFieldName;
  public asnType: AsnType;
  public unique: boolean;
  public optionality: Optionality | undefined;

  private fixedTypeValueFieldSpecTag: undefined;

  constructor(
    fieldRerence: PrimitiveFieldName,
    asnType: AsnType,
    unique: boolean,
    optionality?: Optionality
  ) {
    this.fieldReference = fieldRerence;
    this.asnType = asnType;
    this.unique = unique;
    this.optionality = optionality;
  }

  public getDepth(): number {
    return this.asnType.getDepth();
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    this.asnType.toSpreadsheet(
      worksheet,
      {
        [headerIndexed(
          HEADER_NAME_BASE,
          depth
        )]: this.fieldReference.toString(),
        [HEADER_OPTIONAL]: this.optionality
          ? this.optionality.toString()
          : undefined,
        [HEADER_UNIQUE]: this.unique ? 'UNIQUE' : undefined,
      },
      depth
    );
  }

  public toString(): string {
    const arrToString: string[] = [
      this.fieldReference.toString(),
      this.asnType.toString(),
    ];
    if (this.unique) {
      arrToString.push('UNIQUE');
    }
    if (this.optionality !== undefined) {
      arrToString.push(this.optionality.toString());
    }
    return arrToString.join(' ');
  }
}
