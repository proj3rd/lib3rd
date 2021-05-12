import { INamedNumber, NamedNumberFromObject } from "./namedNumber";

export type INamedBit = INamedNumber;

export function NamedBitFromObject(obj: unknown): INamedBit {
  return NamedNumberFromObject(obj);
}
