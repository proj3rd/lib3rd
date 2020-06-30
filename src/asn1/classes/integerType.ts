import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { BooleanValue } from './booleanValue';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';
import { ValueRange } from './valueRange';

export class IntegerType {
  public constraint: IntegerValue | ValueRange | undefined;

  private integerTypeTag: undefined;

  public expand(modules: Modules, expandOption: IExpandOption): IntegerType {
    return this;
  }

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

  public toString(): string {
    const arrToString = ['INTEGER'];
    if (this.constraint !== undefined) {
      arrToString.push(`(${this.constraint.toString()})`);
    }
    return arrToString.join(' ');
  }
}
