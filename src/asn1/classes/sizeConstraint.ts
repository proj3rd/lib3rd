import { IntegerValue } from './integerValue';
import { ValueRange } from './valueRange';

export class SizeConstraint {
  public constraint: IntegerValue | ValueRange;

  private sizeConstraintTag: undefined;

  constructor(constraint: IntegerValue | ValueRange) {
    this.constraint = constraint;
  }

  public toString(): string {
    return `SIZE (${this.constraint.toString()})`;
  }
}
