import { cloneDeep, isEqual } from 'lodash';
import { unimpl, unreach } from '../../utils/unimpl';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { ConstraintSpec, ConstraintSpecFromObject } from '../types/constraintSpec';
import { Modules } from './modules';
import { SizeConstraint } from './sizeConstraint';
import { SubtypeConstraint } from './subtypeConstraint';
import { Unions } from './unions';

export class Constraint {
  public constraintSpec: ConstraintSpec;
  public exceptionSpec: undefined;

  public constraintTag = true;

  constructor(constraint: ConstraintSpec | SizeConstraint) {
    if (constraint instanceof SizeConstraint) {
      const unions = new Unions([[constraint]]);
      this.constraintSpec = new SubtypeConstraint([unions]);
    } else {
      this.constraintSpec = constraint;
    }
  }

  public static fromObject(obj: unknown): Constraint {
    const { constraintSpec: constraintSpecObject, exceptionSpec, constraintTag } = obj as Constraint;
    if (!constraintTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (exceptionSpec !== undefined) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraintSpec = ConstraintSpecFromObject(constraintSpecObject);
    return new Constraint(constraintSpec);
  }

  /**
   * Expand `constraintSpec` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): Constraint {
    if (!(this.constraintSpec instanceof SubtypeConstraint)) {
      return unimpl();
    }
    const expandedConstraint = cloneDeep(this.constraintSpec).expand(
      modules,
      parameterMappings,
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
