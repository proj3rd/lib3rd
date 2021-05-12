import { ContentsConstraint } from "../classes/contentsConstraint";
import { InnerTypeConstraints } from "../classes/innerTypeConstraints";
import { TableConstraint, TableConstraintFromObject } from "./tableConstraint";

export type GeneralConstraint =
  | ContentsConstraint
  | InnerTypeConstraints
  | TableConstraint;

export function GeneralConstraintFromObject(obj: unknown): GeneralConstraint {
  const { contentsConstraintTag } = obj as ContentsConstraint;
  if (contentsConstraintTag) {
    return ContentsConstraint.fromObject(obj);
  }
  const { innerTypeConstraintsTag } = obj as InnerTypeConstraints;
  if (innerTypeConstraintsTag) {
    return InnerTypeConstraints.fromObject(obj);
  }
  return TableConstraintFromObject(obj);
}
