import { SubtypeConstraint } from "../classes/subtypeConstraint";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { GeneralConstraint, GeneralConstraintFromObject } from "./generalConstraint";

export type ConstraintSpec = GeneralConstraint | SubtypeConstraint;

export function ConstraintSpecFromObject(obj: unknown): ConstraintSpec {
  try {
    const constraintSpec = GeneralConstraintFromObject(obj);
    return constraintSpec;
  } catch (e) {} finally {}
  const { subtypeConstraintTag } = obj as SubtypeConstraint;
  if (subtypeConstraintTag) {
    return SubtypeConstraint.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
