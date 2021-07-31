import { BuiltinValue, BuiltinValueFromObject } from "./builtinValue";
import { ReferencedValue, ReferencedValueFromObject } from '../types/referencedValue';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type Value = BuiltinValue | ReferencedValue;

export function ValueFromObject(obj: unknown): Value {
  try {
    return BuiltinValueFromObject(obj);
  } catch (e) {} finally {}
  try {
    return ReferencedValueFromObject(obj);
  } catch (e) {} finally {}
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
