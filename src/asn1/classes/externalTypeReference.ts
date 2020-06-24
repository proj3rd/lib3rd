import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';

export class ExternalTypeReference {
  public moduleReference: string;
  public typeReference: string;

  private externalTypeReferenceTag: undefined;

  constructor(moduleReference: string, typeReference: string) {
    this.moduleReference = moduleReference;
    this.typeReference = typeReference;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}
