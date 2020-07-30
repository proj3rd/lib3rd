import { unimpl } from 'unimpl';
import { SizeConstraint } from '../classes/sizeConstraint';
import { IParameterMapping } from '../expander';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';

export class OctetStringType {
  public constraint: ContentsConstraint | SizeConstraint | undefined;

  private octetStringTypeTag: undefined;

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): OctetStringType {
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
      this.constraint = constraint;
    } else if (constraint instanceof InnerTypeConstraints) {
      return unimpl();
    } else if (constraint instanceof ObjectSet) {
      return unimpl();
    } else if (constraint instanceof ComponentRelationConstraint) {
      return unimpl();
    } else {
      if (constraint.elementSetSpecList.length !== 1) {
        return unimpl();
      }
      const elementSetSpec = constraint.elementSetSpecList[0];
      if (elementSetSpec instanceof ExtensionMarker) {
        throw Error('Not implemented');
      }
      if (elementSetSpec.intersectionsList.length > 1) {
        return unimpl();
      }
      const intersections = elementSetSpec.intersectionsList[0];
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
    if (this.constraint === undefined) {
      return 'OCTET STRING';
    }
    return `OCTET STRING (${this.constraint.toString()})`;
  }
}
