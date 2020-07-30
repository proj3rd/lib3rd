import { AsnType } from './asnType';
import { Value } from './value';

export class ContentsConstraint {
  public asnType: AsnType | undefined;
  public value: Value | undefined;

  constructor(asnType: AsnType | undefined, value: Value | undefined) {
    if (asnType === undefined && value === undefined) {
      throw Error();
    }
    this.asnType = asnType;
    this.value = value;
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
