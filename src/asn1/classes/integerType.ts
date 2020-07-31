import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { INamedNumber } from '../types';
import { ComponentRelationConstraint } from './componentRelationConstraint';
import { Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { SubtypeConstraint } from './subtypeConstraint';

export class IntegerType {
  public constraint: Constraint | undefined;
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

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      return unimpl();
    }
    const constraint = constraints[0];
    const { constraintSpec, exceptionSpec } = constraint;
    if (constraintSpec instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraintSpec instanceof InnerTypeConstraints) {
      return unimpl();
    } else if (constraintSpec instanceof ObjectSet) {
      return unimpl();
    } else if (constraintSpec instanceof ComponentRelationConstraint) {
      return unimpl();
    } else if (constraintSpec instanceof SubtypeConstraint) {
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
