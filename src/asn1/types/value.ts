import { BooleanValue } from "../classes/booleanValue";
import { IntegerValue } from "../classes/integerValue";
import { ObjectIdentifierValue } from "../classes/objectIdentifierValue";
import { BuiltinValue, ReferencedValue } from "../classes/value";
import { ValueReference } from "../classes/valueReference";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type Value = BuiltinValue | ReferencedValue;

export function ValueFromObject(obj: unknown): Value {
  const { booleanValueTag } = obj as BooleanValue;
  if (booleanValueTag) {
    return BooleanValue.fromObject(obj);
  }
  const { integerValueTag } = obj as IntegerValue;
  if (integerValueTag) {
    return IntegerValue.fromObject(obj);
  }
  const { objectIdentifierValueTag } = obj as ObjectIdentifierValue;
  if (objectIdentifierValueTag) {
    return ObjectIdentifierValue.fromObject(obj);
  }
  if (typeof obj === 'string') {
    return obj;
  }
  const { valueReferenceTag } = obj as ValueReference;
  if (valueReferenceTag) {
    return ValueReference.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
