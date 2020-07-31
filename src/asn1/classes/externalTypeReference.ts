import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import {
  ParameterizedTypeAssignment,
  TypeAssignment,
  ValueAssignment,
} from './assignment';
import { Constraint } from './constraint';
import { Modules } from './modules';

export class ExternalTypeReference {
  public moduleReference: string;
  public typeReference: string;

  private externalTypeReferenceTag: undefined;

  constructor(moduleReference: string, typeReference: string) {
    this.moduleReference = moduleReference;
    this.typeReference = typeReference;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    const referencedAssignment = modules.findAssignment(
      this.typeReference,
      this.moduleReference
    );
    if (referencedAssignment === undefined) {
      return this;
    } else if (referencedAssignment instanceof TypeAssignment) {
      const { asnType } = referencedAssignment;
      const expandedType = asnType.expand(modules, []);
      return expandedType;
    } else if (referencedAssignment instanceof ParameterizedTypeAssignment) {
      return unimpl();
    } else if (referencedAssignment instanceof ValueAssignment) {
      return unimpl();
    }
    throw Error();
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return `${this.moduleReference}.${this.typeReference}`;
  }
}
