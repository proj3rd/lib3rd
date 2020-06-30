import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { AsnType } from './asnType';
import {
  ParameterizedTypeAssignment,
  TypeAssignment,
  ValueAssignment,
} from './assignment';
import { _Constraint } from './constraint';
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
    expandOption: IExpandOption
  ): AsnType | undefined {
    const referencedAssignment = modules.findAssignment(
      this.typeReference,
      this.moduleReference
    );
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
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return `${this.moduleReference}.${this.typeReference}`;
  }
}
