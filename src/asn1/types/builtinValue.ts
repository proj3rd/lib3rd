import { BooleanValue } from '../classes/booleanValue';
import { IntegerValue } from '../classes/integerValue';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';

export type BuiltinValue =
  | BooleanValue
  | IntegerValue
  | ObjectIdentifierValue
  | string;

export function BuiltinValueFromObject(obj: unknown): BuiltinValue {
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
  if (typeof obj === 'string' ) {
    return obj;
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
