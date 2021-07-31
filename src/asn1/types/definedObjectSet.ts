import { ExternalObjectSetReference } from "../classes/externalObjectSetReference";
import { ObjectSetReference } from "../classes/objectSetReference";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;

export function DefinedObjectSetFromObject(obj: unknown): DefinedObjectSet {
  const { externalObjectSetReferenceTag } = obj as ExternalObjectSetReference;
  if (externalObjectSetReferenceTag) {
    return ExternalObjectSetReference.fromObject(obj);
  }
  const { objectSetReference } = obj as ObjectSetReference;
  if (objectSetReference) {
    return ObjectSetReference.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
