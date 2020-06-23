import { unimpl } from '../visitors/_devUtils';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';

export class TypeReference {
  public typeReference: string;
  public constraint: InnerTypeConstraints | undefined;

  private typeReferenceTag: undefined;

  constructor(typeReference: string) {
    this.typeReference = typeReference;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      unimpl();
    }
    const constraint = constraints[0];
    if (constraint instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraint instanceof InnerTypeConstraints) {
      this.constraint = constraint;
    } else {
      return unimpl();
    }
  }
}
