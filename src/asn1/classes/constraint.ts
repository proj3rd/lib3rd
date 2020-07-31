import { unreach } from 'unimpl';
import { _ConstraintSpec } from '../types';
import { SizeConstraint } from './sizeConstraint';
import { SubtypeConstraint } from './subtypeConstraint';
import { Unions } from './unions';

export class Constraint {
  public constraintSpec: _ConstraintSpec;
  public exceptionSpec: undefined;

  private constraintTag: undefined;

  constructor(constraint: _ConstraintSpec | SizeConstraint) {
    if (constraint instanceof SizeConstraint) {
      const unions = new Unions([[constraint]]);
      this.constraintSpec = new SubtypeConstraint([unions]);
    } else {
      this.constraintSpec = constraint;
    }
  }

  public toString(): string {
    if (this.exceptionSpec === undefined) {
      return `(${this.constraintSpec.toString()})`;
    }
    return unreach();
  }
}
