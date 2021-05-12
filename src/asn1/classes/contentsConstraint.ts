import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { AsnType, AsnTypeFromObject } from '../types/asnType';
import { Value, ValueFromObject } from '../types/value';

export class ContentsConstraint {
  public asnType: AsnType | undefined;
  public value: Value | undefined;

  public contentsConstraintTag = true;

  constructor(asnType: AsnType | undefined, value: Value | undefined) {
    if (asnType === undefined && value === undefined) {
      throw Error();
    }
    this.asnType = asnType;
    this.value = value;
  }

  public static fromObject(obj: unknown): ContentsConstraint {
    const { asnType: asnTypeObj, value: valueObj, contentsConstraintTag } = obj as ContentsConstraint;
    if (!contentsConstraintTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const asnType = asnTypeObj ? AsnTypeFromObject(asnTypeObj) : undefined;
    const value = valueObj ? ValueFromObject(valueObj) : undefined;
    return new ContentsConstraint(asnTypeObj, value);
  }

  public toString(): string {
    const arrToString: string[] = [];
    if (this.asnType !== undefined) {
      arrToString.push(`CONTAINING ${this.asnType.toString()}`);
    }
    if (this.value !== undefined) {
      arrToString.push(`ENCODED BY ${this.value.toString()}`);
    }
    return arrToString.join(' ');
  }
}
