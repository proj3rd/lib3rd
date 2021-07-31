import { BuiltinType, BuiltinTypeFromObject } from '../types/builtinType';
import { ReferencedType, ReferencedTypeFromObject } from '../types/referencedType';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type AsnType = BuiltinType | ReferencedType;

export function AsnTypeFromObject(obj: unknown): AsnType {
  try {
    return BuiltinTypeFromObject(obj);
  } catch (e) {} finally {}
  try {
    return ReferencedTypeFromObject(obj);
  } catch (e) {} finally {}
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
