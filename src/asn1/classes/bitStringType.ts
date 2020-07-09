import { unimpl } from '../../_devUtils';
import { IParameterMapping } from '../expander';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';

export class BitStringType {
  public constraint: SizeConstraint | undefined;

  private bitStringTypeTag: undefined;

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): BitStringType {
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
      if (intersectionElements instanceof SizeConstraint) {
        this.constraint = intersectionElements;
      } else {
        unimpl();
      }
    }
  }

  public toString(): string {
    const arrToString = ['BIT STRING'];
    if (this.constraint !== undefined) {
      arrToString.push(`(${this.constraint.toString()})`);
    }
    return arrToString.join(' ');
  }
}
