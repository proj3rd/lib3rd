import { todo } from 'unimpl';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { INamedNumber } from '../types';
import { BooleanValue } from './booleanValue';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SizeConstraint } from './sizeConstraint';
import { ValueRange } from './valueRange';

export class IntegerType {
  public constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;
  public namedNumberList: INamedNumber[];

  private integerTypeTag: undefined;

  constructor(namedNumberList: INamedNumber[] = []) {
    this.constraint = [];
    this.namedNumberList = namedNumberList;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): IntegerType {
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
      for (const elementSetSpec of constraint) {
        if (elementSetSpec instanceof ExtensionMarker) {
          this.constraint.push(elementSetSpec);
        } else {
          const intersections = elementSetSpec[0];
          if (intersections.length !== 1) {
            return unimpl();
          }
          const intersectionElements = intersections[0];
          if (intersectionElements instanceof BooleanValue) {
            return unimpl();
          } else if (intersectionElements instanceof IntegerValue) {
            this.constraint.push(intersectionElements);
          } else if (intersectionElements instanceof SizeConstraint) {
            return unimpl();
          } else if (intersectionElements instanceof ValueRange) {
            this.constraint.push(intersectionElements);
          } else if (typeof intersectionElements === 'string') {
            this.constraint.push(new IntegerValue(intersectionElements));
          } else {
            return unimpl();
          }
        }
      }
    }
  }

  public toString(): string {
    const arrToString = ['INTEGER'];
    if (this.namedNumberList.length > 0) {
      arrToString.push('{');
      this.namedNumberList
        .map((namedNumber) => {
          return `${namedNumber.name} (${namedNumber.valueLiteral})`;
        })
        .join(', ');
      arrToString.push('}');
    }
    if (this.constraint !== undefined) {
      return todo();
    }
    return arrToString.join(' ');
  }
}
