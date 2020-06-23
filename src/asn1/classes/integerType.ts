import { unimpl } from '../visitors/_devUtils';
import { BooleanValue } from './booleanValue';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { SizeConstraint } from './sizeConstraint';
import { ValueRange } from './valueRange';
import { InnerTypeConstraints } from './innerTypeConstraints';

export class IntegerType {
  public constraint: IntegerValue | ValueRange | undefined;

  private integerTypeTag: undefined;

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      return unimpl();
    }
    const constraint = constraints[0];
    if (constraint instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraint instanceof InnerTypeConstraints) {
      return unimpl();
    } else {
      if (constraint.length !== 1) {
        return unimpl();
      }
      const elementSetSpec = constraint[0];
      if (elementSetSpec instanceof ExtensionMarker) {
        throw Error('Not implemented');
      }
      const intersections = elementSetSpec[0];
      if (intersections.length !== 1) {
        return unimpl();
      }
      const intersectionElements = intersections[0];
      if (intersectionElements instanceof BooleanValue) {
        return unimpl();
      } else if (intersectionElements instanceof IntegerValue) {
        this.constraint = intersectionElements;
      } else if (intersectionElements instanceof SizeConstraint) {
        return unimpl();
      } else if (intersectionElements instanceof ValueRange) {
        this.constraint = intersectionElements;
      } else if (typeof intersectionElements === 'string') {
        this.constraint = new IntegerValue(intersectionElements);
      } else {
        return unimpl();
      }
    }
  }
}
