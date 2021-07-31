import { DefinedObjectClass } from "../classes/asnType";
import { ObjectClassReference } from "../classes/objectClassReference";
import { ObjectSet } from "../classes/objectSet";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { AsnType, AsnTypeFromObject } from "./asnType";
import { Value, ValueFromObject } from "./value";

export type ActualParameter = AsnType | Value | DefinedObjectClass | ObjectSet;

export function ActualParameterFromObject(obj: unknown): ActualParameter {
  try {
    return AsnTypeFromObject(obj);
  } catch (e) {} finally {}
  try {
    return ValueFromObject(obj);
  } catch (e) {} finally {}
  const { objectClassReferenceTag } = obj as ObjectClassReference;
  if (objectClassReferenceTag) {
    return ObjectClassReference.fromObject(obj);
  }
  const { objectSetTag } = obj as ObjectSet;
  if (objectSetTag) {
    return ObjectSet.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
