import { DefinedObjectSet, DefinedObjectSetFromObject } from "./definedObjectSet";

// X.681 clause 12.10
export type ObjectSetElements = DefinedObjectSet;
// Object
// ObjectSetFromObjects
// ParameterizedObjectSet

export function ObjectSetElementsFromObject(obj: unknown): ObjectSetElements {
  return DefinedObjectSetFromObject(obj);
}
