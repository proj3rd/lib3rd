import { ObjectClassReference } from "../classes/objectClassReference";
import { AsnType, AsnTypeFromObject } from "./asnType";

export type Governor = AsnType | ObjectClassReference;

export function GovernorFromObject(obj: unknown): Governor {
  const { objectClassReferenceTag } = obj as ObjectClassReference;
  if (objectClassReferenceTag) {
    return ObjectClassReference.fromObject(obj);
  }
  return AsnTypeFromObject(obj);
}
