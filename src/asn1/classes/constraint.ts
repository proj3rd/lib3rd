import { cloneDeep, isEqual } from 'lodash';
import { unimpl, unreach } from 'unimpl';
import { IParameterMapping } from '../expander';
import { _ConstraintSpec } from '../types';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';
import { SubtypeConstraint } from './subtypeConstraint';
import { Unions } from './unions';

export class Constraint {
  public constraintSpec: _ConstraintSpec;
  public exceptionSpec: undefined;

  private constraintTag: undefined;

  constructor(constraint: _ConstraintSpec | SizeConstraint) {
    if (constraint instanceof SizeConstraint) {
      const unions = new Unions([[constraint]]);
      this.constraintSpec = new SubtypeConstraint([unions]);
    } else {
      this.constraintSpec = constraint;
    }
  }

  /**
   * Expand `constraintSpec` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): Constraint {
    if (!(this.constraintSpec instanceof SubtypeConstraint)) {
      return unimpl();
    }
    const expandedConstraint = cloneDeep(this.constraintSpec).expand(
      modules,
      parameterMappings
    );
    if (!isEqual(expandedConstraint, this.constraintSpec)) {
      this.constraintSpec = expandedConstraint;
    }
    return this;
  }

  public toString(): string {
    if (this.exceptionSpec === undefined) {
      return `(${this.constraintSpec.toString()})`;
    }
    return unreach();
  }
}
