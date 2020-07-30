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
