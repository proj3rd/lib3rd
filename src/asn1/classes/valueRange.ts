import { Value } from './value';

export class ValueRange {
  public lower: Value;
  public upper: Value;

  private valueRangeTag: undefined;

  constructor(lower: Value, upper: Value) {
    this.lower = lower;
    this.upper = upper;
  }

  public toString(): string {
    return `${this.lower.toString()}..${this.upper.toString()}`;
  }
}
