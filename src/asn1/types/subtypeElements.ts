import { SizeConstraint } from "../classes/sizeConstraint";
import { ValueRange } from "../classes/valueRange";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { SingleValue, SingleValueFromObject } from "./singleValue";
import { TypeConstraint, TypeConstraintFromObject } from "./typeConstraint";

export type SubtypeElements =
  | SizeConstraint
  | SingleValue
  | ValueRange
  | TypeConstraint;

export function SubtypeElementsFromObject(obj: unknown): SubtypeElements {
  const { sizeConstraintTag } = obj as SizeConstraint;
  if (sizeConstraintTag) {
    return SizeConstraint.fromObject(obj);
  }
  try {
    return SingleValueFromObject(obj);
  } catch (e) {} finally {}
  const { valueRangeTag } = obj as ValueRange;
  if (valueRangeTag) {
    return ValueRange.fromObject(obj);
  }
  try {
    return TypeConstraintFromObject(obj);
  } catch (e) {} finally {}
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
