import { ObjectClass, ObjectClassDefinition } from "../classes/objectClass";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { AsnType, AsnTypeFromObject } from "./asnType";
import { ObjectSetElements, ObjectSetElementsFromObject } from "./objectSetElements";
import { SubtypeElements, SubtypeElementsFromObject } from "./subtypeElements";

// X.680 clause 50.5
export type Elements =
  | SubtypeElements
  | ObjectSetElements
  // Valid after expand
  | AsnType
  | ObjectClass;

export function ElementsFromObject(obj: unknown): Elements {
  try {
    return SubtypeElementsFromObject(obj);
  } catch (e) {} finally {}
  try {
    return ObjectSetElementsFromObject(obj);
  } catch (e) {} finally {}
  try {
    return AsnTypeFromObject(obj);
  } catch (e) {} finally {}
  const { objectClassDefinitionTag } = obj as ObjectClassDefinition;
  if (objectClassDefinitionTag) {
    return ObjectClassDefinition.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
