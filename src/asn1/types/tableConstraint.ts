import { ComponentRelationConstraint } from "../classes/componentRelationConstraint";
import { ObjectSet } from "../classes/objectSet";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { SimpleTableConstraint } from "../types";

export type TableConstraint =
  | SimpleTableConstraint
  | ComponentRelationConstraint;

export function TableConstraintFromObject(obj: unknown): TableConstraint {
  const { objectSetTag } = obj as ObjectSet;
  if (objectSetTag) {
    return ObjectSet.fromObject(obj);
  }
  const { componentRelationConstraintTag } = obj as ComponentRelationConstraint;
  if (componentRelationConstraintTag) {
    return ComponentRelationConstraint.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
