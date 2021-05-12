import { Value, ValueFromObject } from "./value";

export type SingleValue = Value;

export function SingleValueFromObject(obj: unknown): SingleValue {
  return ValueFromObject(obj);
}
