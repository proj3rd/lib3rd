import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { INamedBit } from '../types';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SizeConstraint } from './sizeConstraint';

export class BitStringType {
  public constraint: SizeConstraint | undefined;
  public namedBitList: INamedBit[];

  private bitStringTypeTag: undefined;

  constructor(namedBitList: INamedBit[] = []) {
    this.namedBitList = namedBitList;
  }

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
    const arrToString = ['BIT STRING'];
    if (this.namedBitList.length > 0) {
      const namedBitListString = this.namedBitList
        .map((namedBit) => {
          return `${namedBit.name} (${namedBit.valueLiteral})`;
        })
        .join(', ');
      arrToString.push(`{${namedBitListString}}`);
    }
    if (this.constraint !== undefined) {
      arrToString.push(`(${this.constraint.toString()})`);
    }
    return arrToString.join(' ');
  }
}
