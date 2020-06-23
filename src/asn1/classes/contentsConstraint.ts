import { AsnType } from './asnType';
import { Value } from './value';

export class ContentsConstraint {
  public asnType: AsnType | undefined;
  public valule: Value | undefined;

  constructor(asnType: AsnType | undefined, value: Value | undefined) {
    if (asnType === undefined && value === undefined) {
      throw Error();
    }
    this.asnType = asnType;
    this.valule = value;
  }
}
