import { DefinedType, DefinedTypeFromObject } from "../types/definedType";

export type ReferencedType = DefinedType;

export function ReferencedTypeFromObject(obj: unknown): ReferencedType {
  return DefinedTypeFromObject(obj);
}
