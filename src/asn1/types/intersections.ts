import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { IntersectionElements, IntersectionElementsFromObject } from "./intersectionElements";

export type Intersections = IntersectionElements[];

export function IntersectionsFromObject(obj: unknown): Intersections {
  if (!(obj instanceof Array)) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  const intersections = obj.map((item) => IntersectionElementsFromObject(item));
  return intersections;
}
