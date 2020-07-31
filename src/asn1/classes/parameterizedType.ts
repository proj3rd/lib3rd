import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { ParameterizedTypeAssignment } from './assignment';
import { Constraint } from './constraint';
import { ExternalTypeReference } from './externalTypeReference';
import { Modules } from './modules';
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

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    if (this.simpleDefinedType instanceof TypeReference) {
      return this.expandTypeReference(modules, parameterMappings);
    } else if (this.simpleDefinedType instanceof ExternalTypeReference) {
      return this.expandExternalTypeReference(modules, parameterMappings);
    }
    throw Error();
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length === 0) {
      return;
    }
    unimpl();
  }

  public toString(): string {
    const innerString = this.actualParameters
      .map((parameter) => parameter.toString())
      .join(', ');
    return `${this.simpleDefinedType.toString()} {${innerString}}`;
  }

  private expandExternalTypeReference(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    if (!(this.simpleDefinedType instanceof ExternalTypeReference)) {
      throw Error();
    }
    const { typeReference, moduleReference } = this.simpleDefinedType;
    const assignment = modules.findAssignment(typeReference, moduleReference);
    if (assignment === undefined) {
      return this;
    } else if (assignment instanceof ParameterizedTypeAssignment) {
      return unimpl();
    } else {
      throw Error();
    }
  }

  private expandTypeReference(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    if (!(this.simpleDefinedType instanceof TypeReference)) {
      throw Error();
    }
    const { typeReference } = this.simpleDefinedType;
    const parameterMapping = parameterMappings.find(
      (mapping) => mapping.parameter.dummyReference === typeReference
    );
    if (parameterMapping === undefined) {
      // A case that typeReference references another IE.
      const assignment = modules.findAssignment(typeReference);
      if (assignment === undefined) {
        return this;
      }
      if (!(assignment instanceof ParameterizedTypeAssignment)) {
        throw Error();
      }
      const { asnType, parameters } = assignment;
      if (parameters.length !== this.actualParameters.length) {
        throw Error();
      }
      const parameterMappingsNew: IParameterMapping[] = this.actualParameters.map(
        (actualParameter, index) => {
          return {
            parameter: parameters[index],
            actualParameter,
          };
        }
      );
      const expandedType = asnType.expand(modules, parameterMappingsNew);
      return expandedType;
    } else if (parameterMapping.actualParameter === undefined) {
      // A case that typeReference is a dummyReference
      return this;
    } else {
      // A case that typeReference shall be substituted with an actualParameter.
      return unimpl();
    }
  }
}

export type ActualParameter = AsnType | Value;
