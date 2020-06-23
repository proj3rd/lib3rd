import { unimpl } from '../visitors/_devUtils';
import { AsnType } from './asnType';
import { _Constraint } from './constraint';
import { NamedType } from './namedType';
import { SizeConstraint } from './sizeConstraint';

export class SequenceOfType {
  public baseType: AsnType | NamedType;
  public constraint: SizeConstraint | undefined;

  private sequenceOfTypeTag: undefined;

  constructor(
    baseType: AsnType | NamedType,
    constraint: SizeConstraint | undefined
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}
