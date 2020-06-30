import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { AsnType } from './asnType';
import {
  ParameterizedTypeAssignment,
  TypeAssignment,
  ValueAssignment,
} from './assignment';
import { _Constraint } from './constraint';
import { ContentsConstraint } from './contentsConstraint';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { Modules } from './modules';

export class TypeReference {
  public typeReference: string;
  public constraint: InnerTypeConstraints | undefined;

  private typeReferenceTag: undefined;

  constructor(typeReference: string) {
    this.typeReference = typeReference;
  }

  public expand(
    modules: Modules,
    expandOption: IExpandOption
  ): AsnType | undefined {
    const referencedAssignment = modules.findAssignment(this.typeReference);
    if (referencedAssignment === undefined) {
      return undefined;
    } else if (referencedAssignment instanceof TypeAssignment) {
      const { asnType } = referencedAssignment;
      const expandOptionNew: IExpandOption = {
        parameters: [],
      };
      const expandedType = asnType.expand(modules, expandOptionNew);
      return expandedType;
    } else if (referencedAssignment instanceof ParameterizedTypeAssignment) {
      return unimpl();
    } else if (referencedAssignment instanceof ValueAssignment) {
      return unimpl();
    }
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    if (constraints.length > 1) {
      unimpl();
    }
    const constraint = constraints[0];
    if (constraint instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraint instanceof InnerTypeConstraints) {
      this.constraint = constraint;
    } else {
      return unimpl();
    }
  }

  public toString(): string {
    if (this.constraint === undefined) {
      return this.typeReference;
    }
    return `${this.typeReference} (${this.constraint.toString()})`;
  }
}
