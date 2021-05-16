import { DefinedValue, DefinedValueFromObject } from "../types/definedValue";

export type ReferencedValue = DefinedValue;

export function ReferencedValueFromObject(obj: unknown): ReferencedValue {
  return DefinedValueFromObject(obj);
}
