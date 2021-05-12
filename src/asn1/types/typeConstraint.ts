import { AsnType, AsnTypeFromObject } from "./asnType";

export type TypeConstraint = AsnType;

export function TypeConstraintFromObject(obj: unknown): TypeConstraint {
  return AsnTypeFromObject(obj);
}
