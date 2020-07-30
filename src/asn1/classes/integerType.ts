import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { INamedNumber } from '../types';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SubtypeConstraint } from './subtypeConstraint';

export class IntegerType {
  public constraint: SubtypeConstraint | undefined;
  public namedNumberList: INamedNumber[];

  private integerTypeTag: undefined;

  constructor(namedNumberList: INamedNumber[] = []) {
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
    } else if (constraint instanceof SubtypeConstraint) {
      this.constraint = constraint;
    } else {
      throw Error();
    }
  }

  public toString(): string {
    const arrToString = ['INTEGER'];
    if (this.namedNumberList.length > 0) {
      const namedNumberListString = this.namedNumberList
        .map((namedNumber) => {
          return `${namedNumber.name} (${namedNumber.valueLiteral})`;
        })
        .join(', ');
      arrToString.push(`{${namedNumberListString}}`);
    }
    if (this.constraint !== undefined) {
      arrToString.push(this.constraint.toString());
    }
    return arrToString.join(' ');
  }
}
