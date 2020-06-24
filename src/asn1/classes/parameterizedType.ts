import { unimpl } from '../visitors/_devUtils';
import { AsnType } from './asnType';
import { _Constraint } from './constraint';
import { ExternalTypeReference } from './externalTypeReference';
import { TypeReference } from './typeReference';
import { Value } from './value';

export class ParameterizedType {
  public simpleDefinedType: TypeReference | ExternalTypeReference;
  public actualParameters: ActualParameter[];

  private paramterizedTypeTag: undefined;

  constructor(
    simpleDefinedType: TypeReference | ExternalTypeReference,
    actualParameters: ActualParameter[]
  ) {
    this.simpleDefinedType = simpleDefinedType;
    this.actualParameters = actualParameters;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    unimpl();
  }
}

export type ActualParameter = AsnType | Value;
