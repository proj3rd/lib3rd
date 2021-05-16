import { ExternalTypeReference } from '../classes/externalTypeReference';
import { ParameterizedType } from '../classes/parameterizedType';
import { TypeReference } from '../classes/typeReference';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';

export type DefinedType =
  | ExternalTypeReference
  | TypeReference
  | ParameterizedType;
  // ParamterizedValueSetType

export function DefinedTypeFromObject(obj: unknown): DefinedType {
  const { externalTypeReferenceTag } = obj as ExternalTypeReference;
  if (externalTypeReferenceTag) {
    return ExternalTypeReference.fromObject(obj);
  }
  const { typeReferenceTag } = obj as TypeReference;
  if (typeReferenceTag) {
    return TypeReference.fromObject(obj);
  }
  const { paramterizedTypeTag } = obj as ParameterizedType;
  if (paramterizedTypeTag) {
    return ParameterizedType.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
