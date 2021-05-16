import { ValueReference } from "../classes/valueReference";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type DefinedValue = ValueReference;

export function DefinedValueFromObject(obj: unknown): DefinedValue {
  const { valueReferenceTag } = obj as ValueReference;
  if (!valueReferenceTag) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return ValueReference.fromObject(obj);
}
